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
      firstName: PositionTitle,
      lastName: catagory,
      age: applyBy,
      address: LocationName,
      tags: [applyLink, DepartmentName]
    }
  }) // summaries is an object
}

// console.log(data)

// const data = [
//   {
//     key: '1',
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     firstName: 'Jim',
//     lastName: 'Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     firstName: 'Joe',
//     lastName: 'Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
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
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      {/* </ColumnGroup> */}
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={tags => (
          <span>
            {tags.map(tag => (
              <Tag color="red" key={tag}>
                {tag}
              </Tag>
            ))}
          </span>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <span>
            <a href="javascript:;">Invite {record.lastName}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        )}
      />
    </Table>
  )
}

// const Index = fetcher("https://data.usajobs.gov/api/Search?Organization=CM63&Page=1&LocationName=22202").then(r => tabular(r))

export default withPageRouter(Index)