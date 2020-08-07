import React, { Component } from 'react'
import { axiosURL } from '../../variables/Variables'

import axios from 'axios'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitHandler = (event) => {
    const { email, password } = this.state
    axios
      .post(axiosURL.auth, {
        email: email,
        password: password,
      },
      {
        withCredentials: true
      })
      .then((res) => {
        if (res.statusText === 'OK') {
          this.props.successfulAuthHandler(res)
        }
      })
      .catch(({ response }) => {
        console.log('Login error:', response)
      })
    event.preventDefault()
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>Correo</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="micorreo@ejemplo.com"
              value={this.state.username}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="mi.$up3r.clav3"
              value={this.state.password}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary" type="submit">Entrar</button>
          </div>

        </form>
      </div>
    )
  }
}

export default Login
