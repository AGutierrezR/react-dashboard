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
      <div>
        Admin Layout
        <Sidebar routes={routes} />
        <Switch>{this.getRoutes(routes)}</Switch>
      </div>
    )
  }
}

export default Admin
