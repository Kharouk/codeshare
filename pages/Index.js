import React from "react"
import Link from "next/link"

const Index = () => {
  return (
    <div>
      <h2>Welcome to CodeShare</h2>
      <Link href="/about" title="About Page">
        <a>About Page</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  )
}

export default Index
