import React, { Component } from "react"
import api from "./../services/api"
import { IoIosAddCircleOutline } from 'react-icons/io';
import './../styles/App.css'

import {
    Accordion,
    Card,
    Form,
    Row,
    Col,
    Button,

} from "react-bootstrap";

export default class Apoio extends Component {
    state = {
        error: "",
        codigo: "",
        nome: "",
        descricao: "",
        usadopor: "",
        //extras
        requisitos: [],
        listaStatus: []
    }
    tipoitem = {
        error: "",
        nome: "",
        requisitos: [],
        descricao: "",
        ativo: ""
    }
    getListaStatus = async e => {
        try {
            // const lista = await api.get("status").then(data => {
            //     this.setState({ listaStatus: data.data })
            // })
            // // this.setState({ listaStatus: lista })
            // console.log(lista)
            console.log(this.state.listaStatus)
        } catch (e) {
            console.log(e)
        }
    }
    handleState = async e => {
        e.preventDefault()
        this.setState({ error: "" })
        console.log(this.state)
        const { codigo, nome, usadopor } = this.state
        if (!codigo || !nome || !usadopor) {
            this.setState({ error: "preencha os campos" })
        } else {
            try {
                await api.post("/status/create", this.state).then(data => {
                    console.log(data.data)
                })
                this.setState({
                    error: "",
                    codigo: "",
                    nome: "",
                    descricao: "",
                    usadopor: "",
                })
                console.log(this.state)
            } catch (e) {
                console.log(e)
            }
        }
    }
    handleTipoitem = async e => {
        e.preventDefault()
        this.tipoitem.error = ("")
        //remove arry vazios
        this.tipoitem.requisitos = this.tipoitem.requisitos.filter(item => item)
        console.log(this.tipoitem)
        const { tipo, requisitos, descricao } = this.tipoitem
        if (!tipo || !requisitos || !descricao) {
            this.tipoitem.error = ("preencha os campos")
        } else {
            try {
                await api.post("/tipoitem/create", this.tipoitem).then(data => {
                    console.log(data.data)
                })
                this.tipoitem = ({
                    error: "",
                    nome: "",
                    requisitos: [],
                    descricao: "",
                    ativo: ""
                })
                console.log(this.tipoitem)
            } catch (e) {
                console.log(e)
            }
        }
    }

    criaElemento() {
        this.setState({ requisitos: [...this.state.requisitos, ""] })
    }

    render() {
        return (
            <div>

                <Button onClick={this.getListaStatus}>lista</Button>
                {this.state.listaStatus.map((dado, i) => {
                    return (
                        <div key={`lista` + i}> {i}  {dado.nome}</div>
                    )
                })}
                <Accordion defaultActiveKey="0">
                    <Card border="dark">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                            Status
                    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form onSubmit={this.handleState}>
                                    <Row>
                                        <Col sm="7">
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="4">
                                                    Código
                                    </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control onChange={e => this.setState({ codigo: e.target.value })} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="4">
                                                    Nome do Status
                                    </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control onChange={e => this.setState({ nome: e.target.value })} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="4">
                                                    Descrição
                                    </Form.Label >
                                                <Col sm="5">
                                                    <Form.Control as="textarea" onChange={e => this.setState({ descricao: e.target.value })} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="4">
                                                    Usado por
                            </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control onChange={e => this.setState({ usadopor: e.target.value })} />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="3">
                                            <IoIosAddCircleOutline className={'iconplus'} />
                                        </Col>
                                    </Row>

                                    <Card.Footer>
                                        <Row>
                                            <Button type="submit" variant="primary" size="sm">
                                                Adicionar Status
                                            </Button>{' '}
                                            <Button variant="secondary" size="sm">
                                                Limpar
                                            </Button>
                                            <Card.Text>{this.state.error}</Card.Text>
                                        </Row>
                                    </Card.Footer>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card >
                </Accordion>
                <Accordion defaultActiveKey="1">
                    <Card border="dark">
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                            Tipo Item
                          </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Form onSubmit={this.handleTipoitem}>
                                    <Row>
                                        <Col sm="7">
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="4">
                                                    Tipo
                                          </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control onChange={e => this.tipoitem.tipo = (e.target.value)} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="4">
                                                    Descrisão
                                            </Form.Label >
                                                <Col sm="5">
                                                    <Form.Control as="textarea" onChange={e => this.tipoitem.descricao = (e.target.value)} />
                                                </Col>

                                            </Form.Group>
                                            <Form.Group as={Row} >
                                                <Form.Label column sm="4">
                                                    requisitos
                                          </Form.Label>
                                                <Col sm="5">

                                                    <IoIosAddCircleOutline onClick={(e) => this.criaElemento(e)} className={'iconplus'} />
                                                    {
                                                        this.state.requisitos.map((item, i) => {
                                                            return (
                                                                <Form.Control key={`item` + i} onChange={e => this.tipoitem.requisitos[i] = { item: e.target.value }} />
                                                            )
                                                        })
                                                    }
                                                </Col>
                                            </Form.Group>

                                        </Col>
                                        <Col sm="3">
                                            <IoIosAddCircleOutline className={'iconplus'} />
                                        </Col>
                                    </Row>

                                    <Card.Footer>
                                        <Row>
                                            <Button type="submit" variant="primary" size="sm">
                                                Adicionar TipoItem
                                          </Button>{' '}
                                            <Button variant="secondary" size="sm">
                                                Limpar
                                          </Button>
                                            <Card.Text>{this.tipoitem.error}</Card.Text>
                                        </Row>
                                    </Card.Footer>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card >
                </Accordion>
            </div>
        )
    }
}
