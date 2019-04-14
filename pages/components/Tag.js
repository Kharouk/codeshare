import React from "react"
import PropTypes from "prop-types"

const Tag = ({ children }) => {
  return <a>{children}</a>
}

Tag.propTypes = {
  children: PropTypes.string.isRequired
}

export default Tag
