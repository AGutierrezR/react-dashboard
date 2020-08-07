import React from 'react'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../UI/Backdrop'

const Sidebar = (props) => {
  let classes = ['sidebar']

  if (props.isOpen) {
    classes = [...classes, 'open']
  }

  return (
    <>
      <Backdrop show={props.isOpen} clicked={props.toggle}/>
      <div className={classes.join(' ')}>
        <ul className="nav">
          {props.routes.map((prop, key) => {
            return (
              <li key={key}>
                <NavLink
                  to={prop.layout + prop.path}
                  className="nav-link"
                  activeClassName="active"
                  onClick={props.toggle}
                >
                  {prop.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
