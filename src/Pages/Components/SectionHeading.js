import React from 'react'
import "./Stylesheets/SectionHeading.css"

const SectionHeading = (props) => {
  return (
    <>
      <h2 className="section-heading">{props.heading}</h2>
      <div className="section-heading-quote">
        <p>{props.quote}</p>
        {props.quoteBy && <p>{props.quoteBy}</p>}
      </div>
      <hr className="section-heading-hr"/>
    </>
  )
}

export default SectionHeading
