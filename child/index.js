const census = require("citysdk");
const d3 = require("d3");
const pym = require("pym.js")

const VARIABLES = {
  "B28002_001E": "Total",
  "B28002_004E": "With an Internet subscription!!Broadband of any type",
  "NAME": "name"
}

const censusPromise = function (args) {
  return new Promise(function (resolve, reject) {
    census(args, function (err, json) {
      if (!err) {
        //console.log(json);
        resolve(json);
      } else {
        reject(err);
      }
    });
  });
};


let pymChild = new pym.Child()

censusPromise({
  "vintage": "2017",
  "geoHierarchy": {
    "county": "*"
  },
  "sourcePath": ["acs", "acs5"],
  "values": Object.keys(VARIABLES),
  "geoResolution": "5m"
}).then(data => {
  setup(data)
  pymChild.sendHeight()
});

let margin = {top: 10, left: 10, bottom: 10, right: 10}
let width = parseInt(d3.select('#map').style('width'))
    width = width - margin.left - margin.right
let mapRatio = .5
let height = width * mapRatio;


function setup(data) {
  // let width = 800,
  //       height = 800;

  //define projection and path
  const projection = d3.geoAlbers()
    .scale(width)
    .translate([width / 2, height / 2])

  const path = d3.geoPath()
    .projection(projection);

  //setup svg
  let map = d3.select('#map').append('svg')
    .attr('width', width)
    .attr('height', height);

  //setup infobox
  const infobox = d3.select('svg').append('text')
    .text('hover over a county for details')
    .attr('x', width / 2)
    .attr('y', 20)
    .attr("text-anchor", "middle")
    .style("font-size", "16px");



  //setup color scale
  const colorScale = d3.scaleThreshold()
    .domain([0, .2, .4, .6, .8, 1])
    .range(d3.schemeBlues[6]);

  //draw features
  console.log(data)

  function getPercentBroadband(properties) {
    const { B28002_004E, B28002_001E } = properties;
    const percentBroadband = B28002_001E > 0 ? B28002_004E / B28002_001E : 0
    return percentBroadband;
  }

  /* ====================================== 
  RESIZING
  ====================================== */


  let resize = () => {
    // adjust things when the window size changes
    width = parseInt(d3.select('#map').style('width'));
    width = width - margin.left - margin.right;
    height = width * mapRatio;

    // update projection
    projection
        .translate([width / 2, height / 2])
        .scale(width);

    // resize the map container
    map
        .style('width', width + 'px')
        .style('height', height + 'px');

    // resize the map
    map.select('.land').attr('d', path);
    map.selectAll('.state').attr('d', path);
  }

 

  /* ===
  SVG
  === */

  map.selectAll('path')
    .data(data.features)
    .enter() //interate
      .append('path')
      .attr('d', path)
      .attr('class', 'county')
      .attr('fill', d => colorScale(getPercentBroadband(d.properties)))
      .on('mouseover', (d, i, nodes) => {
        d3.select(nodes[i]).attr('fill', '#FFFF7E')
        infobox.text(() => {
          return `${d.properties.NAME}: ${d3.format(".1%")(getPercentBroadband(d.properties))}`
        })
      })
      .on('mouseout', (d, i, nodes) => {
        d3.select(nodes[i]).attr('fill', colorScale(getPercentBroadband(d.properties)))
        infobox.text('hover over a county for details');
      })
}

d3.select(window).on('resize', resize);