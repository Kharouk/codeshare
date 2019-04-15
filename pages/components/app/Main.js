import React from "react"
import Heading from "../Heading"
import Tag from "../Tag"

const DATA = [
  {
    title: `Advanced React with GraphQL`,
    author: `Wes Bos`,
    url: `https://advancedreact.com`,
    rating: `⭐️️️️️️️⭐️️️️⭐️️️️⭐️️`
  },
  {
    title: `Javascript 30`,
    author: `Wes Bos`,
    url: `https://javascript30.com`,
    rating: `⭐️️️️️️️⭐️️️️⭐️️️️`
  }
]

const Main = () => {
  return (
    <div>
      <Heading as="h2">
        Find and review the best Code Websites out there.
      </Heading>
      <hr />
      <div>
        {DATA.map(course => (
          <div key={course.title}>
            <Heading as="h3">{course.title}</Heading>
            <p>{course.author}</p>
            <Tag href={course.url}>{course.url}</Tag>
            <p>{course.rating}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
