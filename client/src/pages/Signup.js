import React, { Component } from "react";

import { Form, Button, Jumbotron } from "react-bootstrap";
import api from "./../services/api"


class SignUp extends Component {
  state = {
    error: "",
    login: "",
    email: "",
    name: "",
    pwd: "",
    checkpwd: "",
    setor: "",
    is_admin: "",
    is_super: "",
    is_ativo: "",
  }
  handleCadastroUser = async e => {
    e.preventDefault()
    this.setState({ error: "" })
    console.log(this.state)

    const { login, email, name, pwd, checkpwd, setor } = this.state
    if (!login || !name || !email || !pwd || !checkpwd || !setor) {
      this.setState({ error: "Preencha os campos" })
    } else {
      try {
        //  console.log(this.state)
        //  console.log(this.props)
       
        console.log(this.state)
        await api.post("/users/create", this.state)

        this.props.history.push("/")

      } catch (e) {
        console.log(e)
        this.setState({ error: "Falha ao fazer o cadastro" })
      }
    }
  }

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      < Jumbotron >
        {this.state.error && <p>{this.state.error}</p>}
        < Form onSubmit={this.handleCadastroUser} >
          <Form.Group controlId="formBasicSetor">
            <Form.Label>Setor</Form.Label>
            <Form.Check
              type="switch"
              id="is_adm"
              label="Administrador"
              onChange={e => this.setState({ is_admin: e.target.value })}
            />
            <Form.Check
              type="switch"
              id="is_super"
              label="supervisor"
              onChange={e => this.setState({ is_super: e.target.value })}
            />

            <Form.Control as="select" defaultValue="Localize..." onChange={e => this.setState({ setor: [e.target.value] })}>
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>


          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="" onChange={e => this.setState({ name: e.target.value })} />
            <Form.Text className="text-muted" >
              digite seu nome completo
               </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="digite seu login" onChange={e => this.setState({ login: e.target.value })} />
            <Form.Text className="text-muted">
              nome utilizadoo para fazero login
               </Form.Text>
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control id="pwd" type="password" placeholder="senha" onChange={e => this.setState({ pwd: e.target.value })} />
            <Form.Control id="checkpwd" type="password" placeholder=" confirme senha" onChange={e => this.setState({ checkpwd: e.target.value })} />
          </Form.Group>
          <Form.Check
            type="switch"
            id="is_ativo"
            label="Ativar a conta"
            onChange={e => this.setState({ is_ativo: e.target.value })}
          />
          <Button variant="primary" type="submit" size="lg" block>
            Cadastrar
            </Button>
        </Form >
      </Jumbotron >

      // <form onSubmit={this.handleSignUp}>
      //   <img src={Logo} alt="Airbnb logo" />
      //   {this.state.error && <p>{this.state.error}</p>}
      //   <input
      //     type="text"
      //     placeholder="Nome de usuário"
      //     onChange={e => this.setState({ username: e.target.value })}
      //   />
      //   <input
      //     type="email"
      //     placeholder="Endereço de e-mail"
      //     onChange={e => this.setState({ email: e.target.value })}
      //   />
      //   <input
      //     type="password"
      //     placeholder="Senha"
      //     onChange={e => this.setState({ password: e.target.value })}
      //   />
      //   <button type="submit">Cadastrar grátis</button>
      //   <hr />
      //   <Link to="/">Fazer login</Link>
      // </form>

    );
  }
} export default SignUp;