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
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input 
              className="form-control"
              type="text" 
              name="name" 
              placeholder="Nombre" 
              onChange={this.onChangeHandler}
              value={this.state.name}
              required/>
          </div>

          <div className="form-group">
            <input 
              className="form-control"
              type="text" 
              name="company" 
              placeholder="Compania" 
              onChange={this.onChangeHandler}
              value={this.state.company}
              required/>
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="number" 
              name="price" 
              placeholder="Precio" 
              onChange={this.onChangeHandler} 
              value={this.state.price}
              required/>
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

export default ProductForm
