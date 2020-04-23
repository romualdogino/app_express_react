import React, { Component } from "react"
import api from "./../../services/api"
import {
  Modal,
  Button,
  Form,
  Row,
  Card,

} from "react-bootstrap"


export default class entradaModal extends Component {
  state = {
    loadind: true,
    showModal: false,
    error: "",
    tipoitem: "",
    qtd: "",
    datacompra: "",
    garantia: "",
    ordemcompra: "",
    obs: "",
    itemselect:[]
  }


  handleClose = () => this.setState({ showModal: false });
  handleShow = () => this.setState({ showModal: true });
  async componentDidMount() {
    console.log(this.state)
    try {
      await api.get('tipoitem/select')
        .then(data => {
          this.setState({ 'itemselect': data.data })
          this.setState({ loadind: false })
          // return data.data
        })
      // console.log({'arr':arr})

      // console.log(this.state.itemselect)
      // console.log("oki")
    } catch (e) {
      console.log(e)
    }


  }
  handleEntrada = async (e) => {
    console.log(this.state)
    const {datacompra,qtd,tipoitem,garantia,obs,ordemcompra} = this.state
    const data = {datacompra:datacompra,qtd:qtd,tipoitem:tipoitem,garantia:garantia,obs:obs,ordemcompra:ordemcompra}
    if (!datacompra|| !qtd|| !tipoitem) {
      this.setState({error: "falta preecher campo"})
    } else{
      console.log(data)
      try {
        await api.post('entrada',data)
      } catch (e) {
      console.log(e)
      }
    }
  }
  render() {

    if (this.state.loadind) {
      return 'Atualizando...'
    }
    return (
      <>

        <Button variant="primary" onClick={this.handleShow}>
          Inserir uma entrada
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nova entrada</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {console.log(this.state.selectitem)} */}
            <Form.Group as={Row} controlId="" >

              <Form.Label>Item</Form.Label>
              <Form.Control as="select" placeholder="Type"
                onChange={e => this.setState({ tipoitem: e.target.value })} >
                <option>escolha....</option>
                {
                  this.state.itemselect.map((option, index) => {
                    return (<option key={index} value={option.nome}>{option.nome}</option>)
                    // return (<option key={index} value={option.nome}>{option.nome}okkk</option>)
                  })
                }
              </Form.Control>
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm="4">
                Quantidade
              </Form.Label>
              <Form.Control type="number"
                onChange={e => this.setState({qtd: e.target.value })} />
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm="4">
                Ordem da Compra
              </Form.Label>
              <Form.Control
                onChange={e => this.setState({ ordemcompra: e.target.value })} />
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm="4">
                Data da Compra
              </Form.Label >
              <Form.Control type="date"
                onChange={e => this.setState({ datacompra: e.target.value })} />
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm="4">
                Garantia <small> (em meses) </small>
              </Form.Label>
              <Form.Control type="number"
                onChange={e => this.setState({ garantia: e.target.value })} />
            </Form.Group>
            <Form.Group as={Row} >
              <Form.Label column sm="4">
                Observações
              </Form.Label>
              <Form.Control as="textarea"
                onChange={e => this.setState({ obs: e.target.value })} />
            </Form.Group>
            <Card.Text>
              {this.state.error}

            </Card.Text>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={this.handleEntrada}>
              Adicionar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}