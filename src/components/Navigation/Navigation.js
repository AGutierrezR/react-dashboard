import React from 'react'

const Navigation = (props) => {
  return (
    <div className="navbar">
      <div className="nav-toggle" onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Navigation
