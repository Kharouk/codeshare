import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "next/link"

const Button = styled.div`
  display: inline;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  border: 2px solid white;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    color: #333;
    padding-bottom: 1px;
    border-bottom: 2px solid #333;
  }
`

const Tag = ({ children, href }) => {
  return (
    <Button>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Button>
  )
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default Tag
