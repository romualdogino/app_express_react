import React ,{Component} from "react"
import api from "./../services/api"
import { login } from './../services/auth'
import {
    Jumbotron,
    Form,
    Button,
} from "react-bootstrap"


export default class Login extends Component {
state = {
    error: "",
    user: "luiz",
    pwd: "123",
}
handleCadastroUser = async e => {
    e.preventDefault()
    this.setState({ error: "" })
    // console.log(this.state)
    const { user, pwd } = this.state
    if (!user || !pwd) {
        this.setState({ error: "Preencha os campos" })
    } else {
        try {
            // console.log(this.state)
            console.log(this.props)
            await api.post("/auth/login", this.state).then(data =>{
                console.log(data.data)
                login(data.data.token)
            })

            this.props.history.push("/")

        } catch (e) {
            console.log(e)
            this.setState({ error: "Falha ao fazer o cadastro" })
        }
    }
}
render() {
    return (
        <div id="login">
            <Jumbotron>
                {this.state.error && <p>{this.state.error}</p>}
                <Form onSubmit={this.handleCadastroUser}>
                    <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" placeholder="digite seu login" onChange={e => this.setState({ user: e.target.value })} />
                        <Form.Text className="text-muted">
                            caso de esquecimento entrar em contato com a supervisão
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => this.setState({ pwd: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg" block>
                        Entrar
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}
}