import React, { Component } from "react"
import api from "./../services/api"
// import { IoIosAddCircleOutline } from 'react-icons/io';
import './../styles/App.css'
import EntradaModal from "./formulario/entrega"

import {
    Container,
    Table,
} from "react-bootstrap";

export default class Apoio extends Component {
    state = {
        loadind: true,
        error: "",
        listaEntrada: false,
    }
    async componentDidMount() {
        try {
            await api.get('entrada').then(data => {
                this.setState({ listaEntrada: data.data })
                this.setState({ loadind: false })
            })
            console.log(this.state.listaEntrada)
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        if (this.state.loadind) {
            return "atualizando..."
        } else {
            return (
                <Container>
                    <EntradaModal />



                    <Table responsive>
                        <thead>
                            <tr>
                                <th>quantidade</th>
                                <th>item </th>
                                <th>data da compra</th>
                                <th>garantia</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaEntrada.map((lista, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{lista.qtd + "/" + lista.qtdinicial}</td>
                                            <td>{lista.tipoitem}</td>
                                            <td>{lista.datacompra}</td>
                                            <td>{lista.garantia}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            )
        }

    }

}

