import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul className="nav">
      {props.routes.map((prop, key) => {
        return (
          <li key={key}>
            <NavLink
              to={prop.layout + prop.path}
              className="nav-link"
              activeClassName="active">
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
