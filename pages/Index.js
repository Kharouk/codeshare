import React from "react"
import Tag from "./components/Tag"
import Heading from "./components/Heading"
import Main from "./components/app/Main"

const Index = () => {
  return (
    <div>
      <Heading center>CodeShare</Heading>
      <Tag href="/about">About Us</Tag>
      <Tag href="/login">Login</Tag>
      <Main />
    </div>
  )
}

export default Index
