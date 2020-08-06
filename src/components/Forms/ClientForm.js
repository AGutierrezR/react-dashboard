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
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>

        <input 
          type="text" 
          name="name" 
          placeholder="Nombre" 
          onChange={this.onChangeHandler}
          value={this.state.name}
          required/>

        <input 
          type="text" 
          name="lastname" 
          placeholder="Apellidos" 
          onChange={this.onChangeHandler}
          value={this.state.lastname}
          required/>

        <input 
          type="email" 
          name="email" 
          placeholder="Correo" 
          onChange={this.onChangeHandler} 
          value={this.state.email}
          required/>

        <button type="submit">Agregar Cliente</button>
        <button onClick={this.props.dismiss}>Cancelar</button>
        
      </form>
    )
  }
}

export default ClientForm
