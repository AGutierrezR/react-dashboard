import React, { Component } from 'react'

class ClientForm extends Component {
  state = {
    id: this.props.id,
    name: this.props.name || '',
    lastname: this.props.lastname || '',
    email: this.props.email || '',
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.submit(this.state)
    this.props.dismiss()
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Joel"
              onChange={this.onChangeHandler}
              value={this.state.name}
              required
            />
          </div>

          <div className="form-group">
            <label>Apellidos</label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              placeholder="Perez Jimenez"
              onChange={this.onChangeHandler}
              value={this.state.lastname}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="micorreo@ejemplo.com"
              onChange={this.onChangeHandler}
              value={this.state.email}
              required
            />
          </div>

          <div>
            <button className="btn btn-success" type="submit">
              {this.props.btnLabel}
            </button>
            <button
              className="btn btn-warning ml-1"
              onClick={this.props.dismiss}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default ClientForm
