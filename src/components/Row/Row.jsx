import React from "react"
import "./Row.css"

const Row = ({ children, className }) => {
  return (
    <div className={className ? `${className} row` : "row"}>{children}</div>
  )
}

export default Row
