import React, { Component } from 'react'
import { thClientArray } from '../variables/Variables'
import axios from 'axios'
import { axiosURL } from '../variables/Variables'
import ClientForm from '../components/Forms/ClientForm'

class Clients extends Component {
  state = {
    clients: null,
    form: null,
    isEditing: false
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

  createClientHanlder = (client) => {
    const {name, lastname, email} = client
    axios
      .post(axiosURL.clients, {name, lastname, email})
      .then((res) => {
        const clients = [...this.state.clients, res.data]
        this.setState({ clients })
      })
      .catch(({ response }) => {
        console.log('Create error:', response)
      })
  }

  updateClientHandler = (_client) => {
    const {id, name, lastname, email} = _client
    axios
      .patch(axiosURL.clients + '/' + id, {
        name,
        lastname,
        email
      })
      .then((res) => {
        this.setState(prevState => ({
          clients: prevState.clients.map((client) => {
            if(client.id === _client.id) {
              client = _client
            }
            return client
          })
        }))
      })
      .catch(({ response }) => {
        console.log('Update error:', response)
      })
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
        console.log('Delete error:', err.response)
      })
  }

  editHandler = (client) => {
    this.setState({form: client, isEditing: true})
  }

  dismissEditHandler = () => {
    this.setState({form: null, isEditing: false})
  }

  render() {
    let clients = null
    let editForm = null

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
                    <button onClick={() => this.editHandler(client)}>Editar</button>
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

    if (this.state.isEditing) {
      editForm = (
        <ClientForm 
          {...this.state.form} 
          submit={(client) => {this.updateClientHandler(client)}}
          dismiss={this.dismissEditHandler}/>
      )
    }

    return (
      <div className="content">
        <h1>Clientes</h1>
        <ClientForm 
          submit={(client) => this.createClientHanlder(client)}
          />
        {clients}
        {editForm}
      </div>
    )
  }
}

export default Clients
