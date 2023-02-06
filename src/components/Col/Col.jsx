import React from "react"
import "./Col.css"

const Col = (props) => {
  const { className, bp } = props

  const handleClassName = () => {
    if (bp) {
      return Object.entries(props.bp).reduce(
        (className, breakPoint, i) =>
          className +
          "col-" +
          breakPoint.join("-") +
          (i === Object.keys(bp).length - 1 ? "" : " "),
        ""
      )
    } else {
      return "col"
    }
  }

  return (
    <div className={handleClassName() + (className ? ` ${className}` : "")}>
      Col
    </div>
  )
}

export default Col
