import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../index.css';
import './NavBar.css';

function NavBarComponent() {
  return (
    <Navbar sticky="top" className="navColor" expand="lg" variant="light">
      <Container>
        <div className="fatherNames">
          <h3 className="namesNav">Lucas Mazuca Godoi</h3>
          <p className="namesNav">Desenvolvedor Full Stack Web</p>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">PÁGINA INICIAL</Nav.Link>
            <Nav.Link href="#link">CURRÍCULO</Nav.Link>
            <NavDropdown title="CURSOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#cursos/1.1">PROJETOS</NavDropdown.Item>
              <NavDropdown.Item href="#cursos/1.2">CERTIFICADOS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HABILIDADES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#habilidades/1.1">Habilidades Técnicas</NavDropdown.Item>
              <NavDropdown.Item href="#habilidades/1.2">Habilidades Pessoais</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
