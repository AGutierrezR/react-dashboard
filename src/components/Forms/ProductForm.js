import React, { Component } from 'react'

class ProductForm extends Component {
  state = {
    id: this.props.id,
    name: this.props.name || '',
    company: this.props.company || '',
    price: this.props.price || '',
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
          name="company" 
          placeholder="Compania" 
          onChange={this.onChangeHandler}
          value={this.state.company}
          required/>

        <input 
          type="number" 
          name="price" 
          placeholder="Precio" 
          onChange={this.onChangeHandler} 
          value={this.state.price}
          required/>

        <button type="submit">Agregar Producto</button>
        <button onClick={this.props.dismiss}>Cancelar</button>
        
      </form>
    )
  }
}

export default ProductForm
