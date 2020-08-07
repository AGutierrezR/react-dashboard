import React, { Component } from 'react'
import Login from '../components/Login/Login'

 class LoginLayout extends Component {

  successfulAuthHandler = (data) => {
    // TODO: actualizar el component padre
    this.props.history.push("admin/dashboard")
  }
  render() {
    return (
      <div>
        <div className="container pt-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <h1>Bienvenido</h1>
              <Login successfulAuthHandler={this.successfulAuthHandler}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginLayout
