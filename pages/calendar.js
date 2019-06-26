import { Calendar, Badge, Drawer, List, Avatar, Card, Icon, Row, Col, Tag, Progress } from 'antd';
import Markdown from 'react-markdown'
// import { Fragment } from 'react';
import { useState, useEffect, useReducer, useContext } from 'react'
import { withPageRouter } from '../components/withPageRouter'

import gql from 'nanographql'


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
    body: ISSUES_QUERY({ name: "embeds", owner: "loganpowell" })
  })

  const prime = await result.json()
  // console.log("prime:")
  const { data: { repository: { issues: { edges } } } } = prime
  // console.log(prime)

  return edges.map(({ node }, idx) => {
    const {
      title,
      url,
      assignees: { edges: assignee_edges },
      author: { login, avatarUrl: authorAvatar },
      bodyText,
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
  })
}


function getListData(data, value) {

  let input = new Date(value).setHours(0, 0, 0, 0)
  // console.log("value: " + value)

  // let fetchedDate = new Date("2019-06-28T00:00:00Z").toISOString().split('T')[0]
  let matches = data.filter((cur, idx) => new Date(cur.dueOn).setHours(0, 0, 0, 0) === input)
  return matches.map(({ state, issue_title }) => ({
    type: state === "OPEN" ? 'error' : 'success',
    content: issue_title
  }))
}



const DataCells = ({ value }) => {
  const { state: { data } } = useContext(Context)

  if (!data) {
    return null
  } else {
    const filteredIssues = getListData(data, value)

    // console.log('issues: ' + data)

    // console.log("state: " + state )
    return (
      <ul className="events">
        {filteredIssues.map(item => (
          <li key={item.content}>
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
  const matches = data.filter(datum => new Date(date).setHours(0, 0, 0, 0) === new Date(datum.dueOn).setHours(0, 0, 0, 0))
  return matches
}


const StatBar = ({ body, percentDone, tags }) => {
  const bodySansImgRegex = /(\!\[)(.*?)(\))/g
  const cleanedBody = body.replace(bodySansImgRegex, "")
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
    <Markdown source={cleanedBody}/>
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


  console.log("bannerSrc: " + bannerSrc)

  return (
    <Card
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
        <List>
          {state.drawerContents ? state.drawerContents.map((issue, idx) => (
            <List.Item key={issue.key}>
              <IssueCard issue={issue} />
            </List.Item>
          )) : ""}
        </List>
      </Drawer>
    </Context.Provider>
  )
}


export default withPageRouter(Index)