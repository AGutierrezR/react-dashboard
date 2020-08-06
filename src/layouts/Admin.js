import React, { Component } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

import routes from '../routes'
import { Route, Switch } from 'react-router-dom'

class Admin extends Component {

  getRoutes = routes => {
    return routes.map((prop, key) => (
      <Route 
        path={prop.layout + prop.path}
        render={props => (
          <prop.component
            {...props}
          />
        )}
        key={key}
      />
    ))
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar routes={routes} />
        <div id="main-panel" className="main-panel">
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    )
  }
}

export default Admin
