import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      Sidebar
      <ul>
      {props.routes.map((prop, key) => {
        return (
          <li key={key}>
            <NavLink
              to={prop.layout + prop.path}>

              {prop.name}
            </NavLink>
          </li>
        )
      })}

      </ul>
    </div>
  )
}

export default Sidebar
