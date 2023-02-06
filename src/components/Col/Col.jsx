import React from "react"
import "./Col.css"

const Col = (props) => {
  const { className, bp } = props

  const handleBpClassName = () => {
    if (!bp) return "col"

    const bpEntries = Object.entries(bp)
    const bpEntriesLen = bpEntries.length

    return bpEntries.reduce(
      (className, breakPoint, i) =>
        className +
        "col-" +
        breakPoint.join("-") +
        (i === bpEntriesLen - 1 ? "" : " "),
      ""
    )
  }

  return (
    <div className={handleBpClassName() + (className ? ` ${className}` : "")}>
      Col
    </div>
  )
}

export default Col
