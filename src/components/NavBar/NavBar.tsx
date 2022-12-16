import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../index.css';
import './NavBar.css';

function NavBarComponent() {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <div className="fatherNames">
          <h3 className="namesNav">Lucas Mazuca Godoi</h3>
          <h5 className="namesNav">Desenvolvedor Full Stack Web</h5>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">PÁGINA INICIAL</Nav.Link>
            <Nav.Link href="#link">CURRÍCULO</Nav.Link>
            <NavDropdown title="CURSOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#cursos/3.1">PROJETOS</NavDropdown.Item>
              <NavDropdown.Item href="#cursos/3.2">CERTIFICADOS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#skills">HABILIDADES</Nav.Link>
            <Nav.Link href="#Contact">CONTATO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
