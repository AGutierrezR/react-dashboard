import React from 'react'
// import classes from './Backdrop.module.css'

const Backdrop = props => (
  props.show ? <div className="backdrop" onClick={props.clicked}></div>: null
)

export default Backdrop
