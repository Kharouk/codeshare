import React from "react"
import Link from "next/link"
import Tag from "./components/Tag"

const Index = () => {
  return (
    <div>
      <h2>Welcome to CodeShare</h2>
      <Tag href="/about">About us</Tag>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  )
}

export default Index
