import { Calendar, Badge, Drawer, List, Avatar, Card, Icon, Row, Col } from 'antd';
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
      state,
      dueOn,
      issue_author: { user_id: login, authorAvatar },
      issue_url: url,
      assignees: assignee_edges.map(({ node: { name, avatarUrl } }) => ({ name, avatarUrl })),
      labels: label_edges.map(({ node: { color, name } }) => ({ color, name })),
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

let example_response = {
  "data": {
    "repository": {
      "issues": {
        "edges": [
          {
            "node": {
              "id": "MDU6SXNzdWU0NTgwNTc2Mjc=",
              "title": "testing back-log",
              "url": "https://github.com/loganpowell/embeds/issues/2",
              "assignees": {
                "edges": [
                  {
                    "node": {
                      "id": "MDQ6VXNlcjM0MDgxOTE=",
                      "name": "Logan Powell",
                      "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
                    }
                  }
                ]
              },
              "author": {
                "login": "loganpowell",
                "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
              },
              "milestone": {
                "id": "MDk6TWlsZXN0b25lNDQyNDU2NA==",
                "dueOn": "2019-06-28T00:00:00Z"
              },
              "state": "OPEN",
              "labels": {
                "edges": []
              },
              "projectCards": {
                "nodes": [
                  {
                    "column": {
                      "name": "back-log",
                      "createdAt": "2019-06-19T14:44:59Z"
                    }
                  }
                ],
                "edges": [
                  {
                    "node": {
                      "id": "MDExOlByb2plY3RDYXJkMjI5NzM4MjY=",
                      "note": null,
                      "url": "https://github.com/loganpowell/embeds/projects/1#card-22973826"
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "id": "MDU6SXNzdWU0NTgwNTk4MDY=",
              "title": "testing wip",
              "url": "https://github.com/loganpowell/embeds/issues/3",
              "assignees": {
                "edges": []
              },
              "author": {
                "login": "loganpowell",
                "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
              },
              "milestone": {
                "id": "MDk6TWlsZXN0b25lNDQyNDU2NA==",
                "dueOn": "2019-06-28T00:00:00Z"
              },
              "state": "OPEN",
              "labels": {
                "edges": [
                  {
                    "node": {
                      "id": "MDU6TGFiZWwxNDAzNTE5MzIw",
                      "color": "d73a4a",
                      "name": "bug"
                    }
                  }
                ]
              },
              "projectCards": {
                "nodes": [
                  {
                    "column": {
                      "name": "WIP",
                      "createdAt": "2019-06-19T14:45:06Z"
                    }
                  }
                ],
                "edges": [
                  {
                    "node": {
                      "id": "MDExOlByb2plY3RDYXJkMjI5NzQwNDU=",
                      "note": null,
                      "url": "https://github.com/loganpowell/embeds/projects/1#card-22974045"
                    }
                  }
                ]
              }
            }
          },
          {
            "node": {
              "id": "MDU6SXNzdWU0NTgwNjAzNTQ=",
              "title": "testing done",
              "url": "https://github.com/loganpowell/embeds/issues/4",
              "assignees": {
                "edges": []
              },
              "author": {
                "login": "loganpowell",
                "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
              },
              "milestone": {
                "id": "MDk6TWlsZXN0b25lNDQyNDU2NA==",
                "dueOn": "2019-06-28T00:00:00Z"
              },
              "state": "CLOSED",
              "labels": {
                "edges": [
                  {
                    "node": {
                      "id": "MDU6TGFiZWwxNDAzNTE5MzIz",
                      "color": "a2eeef",
                      "name": "enhancement"
                    }
                  }
                ]
              },
              "projectCards": {
                "nodes": [
                  {
                    "column": {
                      "name": "Done",
                      "createdAt": "2019-06-19T14:45:11Z"
                    }
                  }
                ],
                "edges": [
                  {
                    "node": {
                      "id": "MDExOlByb2plY3RDYXJkMjI5NzQxMTc=",
                      "note": null,
                      "url": "https://github.com/loganpowell/embeds/projects/1#card-22974117"
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
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
  return null
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
    bodyHTML,
    card_info: { card_note }
  } = issue

  const imageTagsRegex = /<img [^>]*src="[^"]*"[^>]*>/gm
  const imageSrcRegex = /.*src="([^"]*)".*/
  const images = bodyHTML.length > 0 ? bodyHTML.match(imageTagsRegex) : null
  const bannerSrc = images !== null ? images.map(img => img.replace(imageSrcRegex, '$1'))[0] : ""
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
        description={bodyText}
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

// <ul className="events">
//         {filteredIssues.map(item => (
//           <li key={item.content}>
//             <Badge status={item.type} text={item.content} className="ant-badge-status" />
//           </li>
//         ))}
//         <style jsx>{`
//         .events {
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }
//         .events .ant-badge-status {
//           overflow: hidden;
//           white-space: nowrap;
//           width: 100%;
//           text-overflow: ellipsis;
//           font-size: 12px;
//         }
//         `}
//         </style>

export default withPageRouter(Index)

let example = {
  "key": 0,
  "issue_title": "testing back-log",
  "state": "OPEN",
  "dueOn": "2019-06-28T00:00:00Z",
  "issue_author": { "user_id": "loganpowell", "authorAvatar": "https://avatars1.githubusercontent.com/u/3408191?v=4" },
  "issue_url": "https://github.com/loganpowell/embeds/issues/2",
  "assignees": [{ "name": "Logan Powell", "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4" }],
  "labels": [],
  "column_name": "back-log",
  "card_info": { "card_note": null, "card_url": "https://github.com/loganpowell/embeds/projects/1#card-22973826" }
}