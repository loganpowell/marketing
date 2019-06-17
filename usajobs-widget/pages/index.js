import { useState, useEffect } from 'react'
import { withPageRouter } from '../components/withPageRouter'
import { DatePicker, Table, Divider, Tag } from "antd"
// import { KEY } from 'babel-dotenv'

// dotenv.config()

// const Index = () => (
//   <div>
//     <p>Hello Next.js</p>
//     <DatePicker />
//   </div>
// )

const { Column, ColumnGroup } = Table;


const fetcher = async (url, key) => {
  const result = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization-Key': key,
      'User-Agent': "loganpowell@gmail.com",
      'Host': 'data.usajobs.gov'
    }
  })
  
  const prime = await result.json()
  console.log("api call: " + url);
  // console.log("SearchResult:")
  const { SearchResult: { SearchResultItems } } = prime
  // console.log(SearchResultItems)
  return SearchResultItems.map(({ MatchedObjectDescriptor }, idx) => {
    const {
      ApplicationCloseDate,
      ApplyURI: [ applyLink ],
      DepartmentName,
      JobCategory: [ { Name: catagory } ],
      OrganizationName,
      PositionEndDate: applyBy,
      PositionLocation: [ { CityName, CountryCode, CountrySubDivisionCode, Latitude, LocationName, Longitude } ],
      PositionOfferingType: [ { Name : appointmentType } ],
      PositionRemuneration: [ { MinimumRange: minPay, MaximumRange: maxPay, RateIntervalCode: per} ],
      PositionTitle,
      PositionURI
    } = MatchedObjectDescriptor
    return {
      key: idx,
      positionTitle: PositionTitle,
      deadline: applyBy,
      location: LocationName,
      tags: DepartmentName,
      link: applyLink,
      payRange: `$${Number(minPay).toFixed(0)} to $${Number(maxPay).toFixed(0)} ${per}`
    }
  }) // summaries is an object
}

// console.log(data)

// const data = [
//   {
//     key: '1',
//     positionTitle: 'John',
//     deadline: 'Brown',
//     age: 32,
//     location: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     positionTitle: 'Jim',
//     deadline: 'Green',
//     age: 42,
//     location: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     positionTitle: 'Joe',
//     deadline: 'Black',
//     age: 32,
//     location: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const Index = ({ router: { query: { key } } }) => {
  const [ data, setData ] = useState([])
  
  // WARNING IN CONSOLE:
  // useEffect(async () => {
  //   const res = await fetcher("https://data.usajobs.gov/api/Search?Organization=CM63&Page=1&LocationName=22202")
  //   setData(res)
  // }, [])

  useEffect(() => {
    const fetchData = async ( key ) => {
      const res = await fetcher("https://data.usajobs.gov/api/Search?Organization=CM63&Page=1&LocationName=22202", key)
      setData(res)
    }
    fetchData(key)
  }, [])
  return (
    <Table dataSource={data}>
      {/* <ColumnGroup title="Name"> */}
        <Column title="Position" dataIndex="positionTitle" key="positionTitle" />
        <Column title="Apply By:" dataIndex="deadline" key="deadline" />
      {/* </ColumnGroup> */}
      <Column title="Pay Range" dataIndex="payRange" key="payRange" />
      <Column title="Location" dataIndex="location" key="location" />
      <Column
        title="Apply Here:"
        dataIndex="tags"
        key="tags"
        render={(text, record) => (
            <span>
              <Tag color="black" key={record.key}>
                <a href={record.link}>
                  { record.tags }
                </a>
              </Tag>
            </span> 
        )}
      />
      {/* <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <span>
            <a href={record.link}>Apply</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )}
      /> */}
    </Table>
  )
}

Index.getInitialProps
// const Index = fetcher("https://data.usajobs.gov/api/Search?Organization=CM63&Page=1&LocationName=22202").then(r => tabular(r))

export default withPageRouter(Index)