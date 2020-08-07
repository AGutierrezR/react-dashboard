import React, { Component } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

import routes from '../routes'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'

class Admin extends Component {
  state = {
    sidebarOpen: false
  }

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

  sidebarStatusHandler = () => {
    this.setState(prevState => (
      {sidebarOpen: !prevState.sidebarOpen}
    ))
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar 
          routes={routes} 
          isOpen={this.state.sidebarOpen}
          toggle={this.sidebarStatusHandler}/>
        <div id="main-panel" className="main-panel">
          <Navigation toggle={this.sidebarStatusHandler} />
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    )
  }
}

export default Admin
