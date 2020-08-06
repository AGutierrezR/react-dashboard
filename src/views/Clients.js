import React, { Component } from 'react'
import { thClientArray } from '../variables/Variables'
import axios from 'axios'

class Clients extends Component {
  state = {
    clients: null,
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/clients')
      .then((res) => {
        this.setState({ clients: res.data })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  deleteClientHandler = (id) => {
    axios
    .delete('http://localhost:3001/clients/' + id)
    .then((res) => {
      this.setState(({ clients }) => ({
        clients: clients.filter((person, _) => person.id !== id),
      }))
    })
    .catch((err) => {
      console.log('Error Cliente:', err.response)
    })
  }

  render() {
    let clients = null

    if (this.state.clients) {
      clients = (
        <table>
          <thead>
            <tr>
              {thClientArray.map((prop, key) => {
                return <th key={key}>{prop}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map((client) => {
              return (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.lastname}</td>
                  <td>{client.email}</td>
                  <td>
                    <button>Editar</button>
                    <button onClick={() => this.deleteClientHandler(client.id)} >Eliminar</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }

    return (
      <div>
        Clients
        {clients}
      </div>
    )
  }
}

export default Clients
