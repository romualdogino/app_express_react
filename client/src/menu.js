import React from "react"
import {
    Navbar,
    Nav,
    NavDropdown,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from "./assets/logo.svg"


const Menu = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand as={Link} to="/" href="#"> <img src={Logo} alt="30" width="30" /> {'   '}React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/signup" href="#">Cadastro de Usuário</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link as={Link}  href="#" to="/sobre">Sobre</Nav.Link>
                <Nav.Link as={Link} to="/" href="#">Entrar</Nav.Link>
                <Nav.Link as={Link} to="/logout" href="#">Sair</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)

export default Menu
