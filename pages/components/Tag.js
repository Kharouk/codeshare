import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Link from "next/link"

const Button = styled.div`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
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
