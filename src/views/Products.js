import React, { Component } from 'react'
import { thProductArray } from '../variables/Variables'
import axios from 'axios'
import { axiosURL } from '../variables/Variables'
import ProductForm from '../components/Forms/ProductForm'

class Products extends Component {
  state = {
    products: null,
    form: null,
    isEditing: false
  }

  componentDidMount() {
    axios
      .get(axiosURL.products)
      .then((res) => {
        this.setState({ products: res.data })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  createProductHandler = (product) => {
    const {name, company, price} = product
    axios
      .post(axiosURL.products, {name, company, price: +price})
      .then((res) => {
        const products = [...this.state.products, res.data]
        this.setState({ products })
      })
      .catch(({ response }) => {
        console.log('Create error:', response)
      })
  }

  updateProductHandler = (_product) => {
    const {id, name, company, price} = _product
    axios
      .patch(axiosURL.products + '/' + id, {
        name,
        company,
        price
      })
      .then((res) => {
        this.setState(prevState => ({
          products: prevState.products.map((product) => {
            if(product.id === _product.id) {
              product = _product
            }
            return product
          })
        }))
      })
      .catch(({ response }) => {
        console.log('Update error:', response)
      })
  }

  deleteProductHandler = (id) => {
    axios
      .delete(axiosURL.products + '/' + id)
      .then((res) => {
        this.setState(({ products }) => ({
          products: products.filter((product, _) => product.id !== id),
        }))
      })
      .catch((err) => {
        console.log('Delete error:', err.response)
      })
  }

  editHandler = (product) => {
    this.setState({form: product, isEditing: true})
  }

  dismissEditHandler = () => {
    this.setState({form: null, isEditing: false})
  }

  render() {
    let products = null
    let editForm = null

    if (this.state.products) {
      products = (
        <table>
          <thead>
            <tr>
              {thProductArray.map((prop, key) => {
                return <th key={key}>{prop}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.company}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => this.editHandler(product)}>Editar</button>
                    <button onClick={() => this.deleteProductHandler(product.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }

    if (this.state.isEditing) {
      editForm = (
        <ProductForm 
          {...this.state.form} 
          submit={(product) => {this.updateProductHandler(product)}}
          dismiss={this.dismissEditHandler}/>
      )
    }

    return (
      <div>
        Products
        <ProductForm 
          submit={(product) => this.createProductHandler(product)}
          />
        {products}
        {editForm}
      </div>
    )
  }
}

export default Products
