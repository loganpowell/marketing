import { Calendar, Badge } from 'antd';
// import { Fragment } from 'react';
import { useState, useEffect } from 'react'
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

function getListData(value) {
  let listData;
  // console.log("value: " + new Date(value).toISOString().split('T')[0])
  // console.log("Date: " + new Date("2019-06-28T00:00:00Z").toISOString().split('T')[0])
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);

  return (
    <ul className="events">
      {listData.map(item => (
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


const fetcher = async (auth) => {
  const result = await fetch('https://api.github.com/graphql', {
    method: "POST",
    headers: {
      // 'Content-Type': 'application/json',
      'Authorization': "token " + auth
    },
    body: ISSUES_QUERY({ name: "embeds", owner: "loganpowell" })
  })
 
  const prime = await result.json()
  // console.log("api call: " + url);
  console.log("prime:")
  const { data: { repository: { issues: { edges }}} } = prime
  console.log(prime)
  
  return edges.map(({ node }, idx) => {
    const {
      title,
      url,
      assignees: { edges: assignee_edges },
      author: { login, avatarUrl: authorAvatar },
      milestone: { dueOn },
      state,
      labels: { edges: label_edges },
      projectCards: { nodes: [{ column: { name: column_name }}], edges: [{ node: { note: card_note, url: card_url}}] }
    } = node

    return {
      key: idx,
      issue_title: title,
      state,
      dueOn,
      issue_author: {user_id: login, authorAvatar},
      issue_url: url,
      assignees: assignee_edges.map(({ node: { name, avatarUrl }}) => ({ name, avatarUrl })),
      labels: label_edges.map(({ node: { color, name }}) => ({ color, name })),
      column_name,
      card_info: { card_note, card_url }
    }
  }) 
}

const Index = ({ router: { query: { auth } } }) => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const fetchData = async ( auth ) => {
      const res = await fetcher(auth)
      setData(res)
    }
    fetchData(auth)
  }, [])

  console.log("DATA: " + JSON.stringify(data))
  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
}

export default withPageRouter(Index)