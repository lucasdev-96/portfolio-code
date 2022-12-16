import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../index.css';
import './NavBar.css';

function BasicExample() {
  return (
    <Container>
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <Container>
          <div className="fatherNames">
            <h1 className="namesNav">Lucas Mazuca Godoi</h1>
            <h3 className="namesNav">Desenvolvedor Full Stack Web</h3>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Página inicial</Nav.Link>
              <Nav.Link href="#link">Currículo</Nav.Link>
              <NavDropdown title="Cursos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#cursos/3.1">Projetos</NavDropdown.Item>
                <NavDropdown.Item href="#cursos/3.2">Certificados</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#skills">Habilidades</Nav.Link>
              <Nav.Link href="#Contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default BasicExample;
