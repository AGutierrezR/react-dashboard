import React, { Component } from 'react'
import { thClientArray } from '../variables/Variables'
import axios from 'axios'
import { axiosURL } from '../variables/Variables'
import AddClientForm from '../components/Forms/addClient'

class Clients extends Component {
  state = {
    clients: null,
  }

  componentDidMount() {
    axios
      .get(axiosURL.clients)
      .then((res) => {
        this.setState({ clients: res.data })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  addCliendHandler = (client) => {
    const clients = [...this.state.clients, client]
    this.setState({ clients })
  }

  deleteClientHandler = (id) => {
    axios
      .delete(axiosURL.clients + '/' + id)
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
                    <button onClick={() => this.deleteClientHandler(client.id)}>
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

    return (
      <div>
        Clients
        <AddClientForm 
          submit={(client) => this.addCliendHandler(client)} 
          />
        {clients}
      </div>
    )
  }
}

export default Clients
