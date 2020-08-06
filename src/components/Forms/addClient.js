import React, { Component } from 'react'
import axios from 'axios'
import { axiosURL } from '../../variables/Variables'

class AddClientForm extends Component {
  state = {
    name: '',
    lastname: '',
    email: '',
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmitHandler = (event) => {
    const { name, lastname, email } = this.state
    axios
      .post(axiosURL.clients, {
        name: name,
        lastname: lastname,
        email: email,
      })
      .then((res) => {
        this.props.submit(res.data)
      })
      .catch(({ response }) => {
        console.log('Agregar cliente error:', response)
      })
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>

        <input 
          type="text" 
          name="name" 
          placeholder="Nombre" 
          onChange={this.onChangeHandler} 
          required/>

        <input 
          type="text" 
          name="lastname" 
          placeholder="Apellidos" 
          onChange={this.onChangeHandler} 
          required/>

        <input 
          type="email" 
          name="email" 
          placeholder="Correo" 
          onChange={this.onChangeHandler} 
          required/>

        <button type="submit">Agregar Cliente</button>
        
      </form>
    )
  }
}

export default AddClientForm
