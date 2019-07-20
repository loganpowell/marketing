import { Calendar, Badge, Drawer, List, Avatar, Card, Icon, Row, Col, Tag, Progress, Button } from 'antd';
import Markdown from 'react-markdown'
// import { Fragment } from 'react';
import { useState, useEffect, useReducer, useContext } from 'react'
import { withPageRouter } from '../components/withPageRouter'
// import { Parser } from 'json2csv'
import CsvDownload from 'react-json-to-csv'
import gql from 'nanographql'
import moment from 'moment'

// const client = new GraphQLClient({
//   url: 'https://api.github.com/graphql',

// })

const ISSUES_QUERY = gql`
query ($name: String!, $owner: String!) { 
  repository(name: $name, owner: $owner){
    issues(last:100){
      edges{
        node{
          id
          title
          createdAt
          url
          bodyText
          bodyHTML
          body
          assignees (first:10){
            edges {
              node {
                id
                name
                avatarUrl
              }
            }
          }
          author{
            login
            avatarUrl
          }
          milestone {
            id
            dueOn
          }
          state
          labels(first:10) {
            edges {
              node {
                id
                color
                name
              }
            }
          }
          projectCards{
            nodes{
              column{
                name
                createdAt
              }
            }
            edges{
              node {
                id
                note
                url
              }
            }
          }
        }
      }
    }
  }
}`

const fetcher = async (auth) => {
  const result = await fetch('https://api.github.com/graphql', {
    method: "POST",
    headers: { 'Authorization': "token " + auth },
    body: ISSUES_QUERY({ name: "digital-marketing-team", owner: "ACalaCensus" })
  })

  const prime = await result.json()
  const { data: { repository: { issues: { edges } } } } = prime
  
  const cleaned = edges.filter(({ node }) => node.milestone !== null)
  // console.log("cleaned:")
  // console.log(cleaned)
  
  return cleaned.map(({ node }, idx) => {
    const {
      title,
      id,
      url,
      assignees: { edges: assignee_edges },
      author: { login, avatarUrl: authorAvatar },
      bodyText,
      createdAt,
      bodyHTML,
      body,
      milestone: { dueOn },
      state,
      labels: { edges: label_edges },
      projectCards: {
        nodes: [{ column: { name: column_name } }],
        edges: [{ node: { note: card_note, url: card_url } }]
      }
    } = node

    return {
      key: id,
      issue_title: title,
      createdAt,
      bodyText,
      bodyHTML,
      body,
      state,
      dueOn,
      issue_author: { user_id: login, authorAvatar },
      issue_url: url,
      assignees: assignee_edges.map(({ node: { name, avatarUrl } }) => ({ name, avatarUrl })),
      labels: label_edges.map(({ node: { color, name, id } }) => ({ color : `#${color}`, name, id })),
      column_name,
      card_info: { card_note, card_url }
    }
  })
}


function getListData(data, value) {

  let input = moment.utc(value).format("MMM Do YYYY")
  // console.log("input:", input)

  // let fetchedDate = new Date("2019-06-28T00:00:00Z").toISOString().split('T')[0]
  let matches = data.filter( cur => moment.utc(cur.dueOn).format("MMM Do YYYY") === input)
  return matches.map(({ state, issue_title, dueOn, key }) => ({
    type: state === "OPEN" ? 'error' : 'success',
    content: issue_title,
    dueOn,
    key
  }))
}

// console.log("moment for dueOn:", moment("2019-07-11T00:00:00Z"))


const DataCells = ({ value }) => {
  const { state: { data } } = useContext(Context)
  // console.log("data:", data )
  // console.log("value:", value._d)
  if (!data) {
    return null
  } else {
    const filteredIssues = getListData(data, value._d)
    // console.log("filteredIssues", filteredIssues)
    // console.log('issues: ' + data)

    // console.log("state: " + state )
    return (
      <ul className="events">
        {filteredIssues.map(item => (
          <li key={item.key}>
            <Badge status={item.type} text={item.content} className="ant-badge-status" />
          </li>
        ))}
        <style jsx>{`
        .events {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .events .ant-badge-status {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          text-overflow: ellipsis;
          font-size: 12px;
        }
        `}
        </style>
      </ul>
    );
  }
}

const dateCellRender = value => <DataCells value={value} />

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
      <style jsx>{`
      .notes-month {
        text-align: center;
        font-size: 28px;
      }
      .notes-month section {
        font-size: 28px;
      }
      `}
      </style>
    </div>
  ) : null;
}


// REDUCER =================================
const calendarReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD': {
      return {
        auth: action.auth,
        data: action.data,
        loaded: true
      }
    }
    case 'OPEN_DRAWER': {
      return {
        ...state,
        drawerOpen: true,
        drawerContents: action.contents
      }
    }
    case 'CLOSE_DRAWER': {
      return {
        ...state,
        drawerOpen: false
      }
    }
    default: return {
      ...state
    }
  }
}

// CONTEXT ==================================
const Context = React.createContext()

// INITIAL STATE ============================
const initialState = {
  auth: "loading...",
  loaded: false,
  data: [],
  drawerOpen: false,
  drawerContents: []
}

const retrieveMatches = (data, date) => {
  const matches = data.filter(datum => moment.utc(date).format("MMM Do YYYY") === moment.utc(datum.dueOn).format("MMM Do YYYY"))
  return matches
}


const StatBar = ({ body, percentDone, tags }) => {
  const bodyImgsRegex = /(\!\[)(.*?)(\))/g
  const cleanedBody = body.replace(bodyImgsRegex, "")
  return (
    <div> 
    { percentDone === 100 ? <div><Progress percent={percentDone} size="small" /><br/></div>
    : percentDone > 0 ? <div><Progress percent={percentDone} size="small" status="active"/><br/></div>
    : null
    } 
    { tags.length > 0 ? tags.map(tag => (
      <div key={tag.id} className="wrap-tag" ><Tag color={tag.color}>{tag.name}</Tag></div>)
    )
    : null
    }
    {/* <Markdown source={cleanedBody}/> */}
    <style jsx>{`
      img { max-width: 100%; height: auto;}
     .wrap-tag { margin-bottom: 3px; border: none; background: none; 
     }`}</style>
    </div>  
  )
}


const { Meta } = Card


const IssueCard = ({ issue }) => {
  // const { state: { data } } = useContext(Context)
  const {
    key,
    card_info: { card_url },
    issue_author: { authorAvatar },
    issue_title,
    issue_url,
    state,
    column_name,
    labels,
    assignees,
    bodyText,
    body,
    bodyHTML,
    card_info: { card_note }
  } = issue

  console.log("labels: " + JSON.stringify(labels))
  const imageTagsRegex = /<img [^>]*src="[^"]*"[^>]*>/gm
  const imageSrcRegex = /.*src="([^"]*)".*/
  const images = bodyHTML.length > 0 ? bodyHTML.match(imageTagsRegex) : null
  const bannerSrc = images !== null ? images.map(img => img.replace(imageSrcRegex, '$1'))[0] : ""

  const allBracketsRegex = /\[.\]/g
  const doneBracketsRegex = /\[x\]/g
  // console.log("regex length: " + body.match(allBracketsRegex))
  const todosCount = body.length > 0 ? body.match(allBracketsRegex) : 0
  const doneCount = body.length > 0 ? body.match(doneBracketsRegex) : 0
  const percentDone = todosCount !== null ? Math.floor((doneCount.length / todosCount.length) * 100) : null


  // console.log("bannerSrc: " + bannerSrc)

  return (
    <Card
      key={key}
      style={{ width: '100%' }}
      cover={bannerSrc !== "" ?
        <img
          alt={issue_title}
          src={bannerSrc}
        />
        : null
      }
      actions={[
        <a href={card_url}>
          <Icon type="project"/>
        </a>,
        <a href={issue_url}>
          <Icon type="edit"/>
        </a>
        ,
        // <Icon type="ellipsis">
        <Avatar src={ assignees.length > 0 ? assignees[0].avatarUrl : "" } size={"small"}/>
        // </Icon>

      ]}
    >
      <Meta
        avatar={<Avatar src={authorAvatar} />}
        title={issue_title}
        description={<StatBar body={body} percentDone={percentDone} tags={labels}/>}
      />
    </Card>
  )
}
/*
    return {
      key: idx,
      issue_title: title,
      bodyText,
      bodyHTML,
      body,
      state,
      dueOn,
      issue_author: { user_id: login, authorAvatar },
      issue_url: url,
      assignees: assignee_edges.map(({ node: { name, avatarUrl } }) => ({ name, avatarUrl })),
      labels: label_edges.map(({ node: { color, name, id } }) => ({ color : `#${color}`, name, id })),
      column_name,
      card_info: { card_note, card_url }
    }
  */

 const getFormattedDate = inDate => {
  var date = new Date(inDate);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return month + "/" + day + "/" + year;
}

// let testDateCreated = "2019-06-19T14:45:32Z"
// let testDateDue = "2019-06-28T00:00:00Z" 

// let formatCreatedDate = GetFormattedDate(testDateCreated) //?

const getCampaign = labels => {
  const filtered = labels.filter(label => label.name.match(/campaign.*/) !== null)
  console.log("filtered: " + JSON.stringify(filtered))
  return filtered.length > 0 ? filtered[0].name.match(/campaign: (.*)/)[1] : ""
}

const dlcsv = (data) => {
  const fileData = data.map(({ 
    key,
    dueOn,
    issue_title,
    createdAt,
    labels,
    bodyText,
    issue_author: { user_id },
    issue_url
  }) => ({
    'ID': key,
    'Event Name': issue_title,
    'Start Date': `${getFormattedDate(createdAt)} 12:00`,
    'End Date': `${getFormattedDate(dueOn)} 12:00`,
    'Campaign': getCampaign(labels) ,
    'Description': bodyText.replace(/(\r\n|\n|\r)/gm,"  ").replace(/,.*$/, ""),
    'Communication Type': "Email Marketing",
    'Decennial Related':  labels.filter(label => label.name === 'decennial').length > 0 ? "TRUE" : "FALSE",
    'Key Date':  labels.filter(label => label.name === 'key date').length > 0 ? "TRUE" : "FALSE",
    'Post to public calendar': "FALSE",
    'Census POC': user_id,
    'Item Type': "Item",
    'Path': issue_url
  }))
  return fileData
}


const Index = ({ router: { query: { auth } } }) => {
  const [state, dispatch] = useReducer(calendarReducer, initialState)
  useEffect(() => {
    const fetchData = (auth) => fetcher(auth).then(res => {
      dispatch({
        type: 'LOAD',
        data: res,
        auth: auth
      })
      // console.log("res: " + JSON.stringify(res))
    })

    fetchData(auth)
  }, [])
  const fireDateSelection = (e) => {
    // console.log("e._d: " + new Date(e._d).setHours(0,0,0,0))
    const matched = retrieveMatches(state.data, e._d)
    dispatch({
      type: 'OPEN_DRAWER',
      contents: matched
    })
  }
  const closeDrawer = () => {
    dispatch({
      type: 'CLOSE_DRAWER'
    })
  }


  // console.log("DATA: " + JSON.stringify(state))
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={fireDateSelection} />
      <Drawer
        title="Issues:"
        placement="right"
        closable={true}
        onClose={closeDrawer}
        visible={state.drawerOpen}
        width={"300px"}
      >
      {state.drawerContents ? state.drawerContents.map((issue, idx) => (
        <div>
          <IssueCard key={issue.key} issue={issue} /><br/>
        </div>
      )) : ""}
      </Drawer>
      {state.data.length > 0 ? 
        <CsvDownload data={dlcsv(state.data)}>
            Download Calendar .csv
          {/* <Button icon="download" size="medium">
          </Button> */}
        </CsvDownload>
        : ""}
    </Context.Provider>
  )
}


export default withPageRouter(Index)