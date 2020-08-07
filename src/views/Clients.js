import React, { Component } from 'react'
import { thClientArray } from '../variables/Variables'
import axios from 'axios'
import { axiosURL } from '../variables/Variables'
import ClientForm from '../components/Forms/ClientForm'
import { Modal, ModalBody } from 'reactstrap'

class Clients extends Component {
  state = {
    clients: null,
    form: null,
    isEditing: false,
    isAdding: false,
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
    const { name, lastname, email } = client
    axios
      .post(axiosURL.clients, { name, lastname, email })
      .then((res) => {
        const clients = [...this.state.clients, res.data]
        this.setState({ clients })
      })
      .catch(({ response }) => {
        console.log('Create error:', response)
      })
  }

  updateClientHandler = (_client) => {
    const { id, name, lastname, email } = _client
    axios
      .patch(axiosURL.clients + '/' + id, {
        name,
        lastname,
        email,
      })
      .then((res) => {
        this.setState((prevState) => ({
          clients: prevState.clients.map((client) => {
            if (client.id === _client.id) {
              client = _client
            }
            return client
          }),
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

  addHandler = () => {
    this.setState({ isAdding: true })
  }

  closeAddHandler = () => {
    this.setState({ isAdding: false })
  }

  editHandler = (client) => {
    this.setState({ form: client, isEditing: true })
  }

  dismissEditHandler = () => {
    this.setState({isEditing: false, form: null })
  }

  render() {
    let clients = null
    let editForm = null

    if (this.state.clients) {
      clients = (
        <table className="table table-striped table-hover mt-4">
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
                    <button
                      className="btn btn-primary"
                      onClick={() => this.editHandler(client)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger ml-1"
                      onClick={() => this.deleteClientHandler(client.id)}
                    >
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
          submit={(client) => {
            this.updateClientHandler(client)
          }}
          dismiss={this.dismissEditHandler}
          btnLabel="Modificar"
          title="Modificar Cliente"
        />
      )
    }

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>Clientes</h1>
              <div>
                <button className="btn btn-success" onClick={this.addHandler}>
                  +
                </button>
              </div>
              <Modal
                isOpen={this.state.isAdding}
                toggle={this.closeAddHandler}
                centered
              >
                <ModalBody>
                  <ClientForm
                    submit={(client) => this.createClientHanlder(client)}
                    dismiss={this.closeAddHandler}
                    btnLabel="Agregar"
                    title="Agregar Cliente"
                  />
                </ModalBody>
              </Modal>
              <div className="table-responsive">{clients}</div>
              <Modal
                isOpen={this.state.isEditing}
                toggle={this.dismissEditHandler}
                centered
              >
                <ModalBody>
                  {editForm}
                </ModalBody>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clients
