import { Link } from "react-router-dom"
import {Nav,NavDropdown,Navbar,Container} from 'react-bootstrap';
import Buscador from "./Buscador"
import Imagen from "../Img/Logo.png"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


function NavBar(){
    const context = useContext(AuthContext)

    return(
            <Navbar expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={Imagen} alt="Logo" width="290"  height="137"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav md-ld-auto">
                    <Nav className="nav">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        {
                            !context.login &&
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Registro</Nav.Link>
                            </>
                        }
                        <Buscador/>
                        {
                            context.login &&
                            <>  
                                <NavDropdown title={context.user?.name } id="basic-nav-dropdown" maxLength="8">
                                    <NavDropdown.Item onClick={context.handlerLogout}>Cerrar Sesion</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavBar