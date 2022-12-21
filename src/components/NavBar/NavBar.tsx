import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../index.css';
import './NavBar.css';
import brazilIcon from '../../assets/img/logo-Brasil.png';
import euaIcon from '../../assets/img/us.png';
import { useTranslation } from 'react-i18next';

function NavBarComponent() {
  const { i18n, t } = useTranslation();
  const languages = [
    { src: brazilIcon, name: 'pt' },
    { src: euaIcon, name: 'en' }
  ];
  return (
    <Navbar sticky="top" className="navColor" expand="lg" variant="light">
      <Container>
        <div className="fatherNames">
          <h3 className="namesNav">Lucas Mazuca Godoi</h3>
          <p className="namesNav">{t('navBar.title')}</p>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{t('navBar.home').toUpperCase()}</Nav.Link>
            <Nav.Link href="#link">{t('navBar.curriculum').toUpperCase()}</Nav.Link>
            <NavDropdown title={t('navBar.courses').toUpperCase()} id="basic-nav-dropdown">
              <NavDropdown.Item href="#cursos/1.1">
                {t('navBar.courses.projects').toUpperCase()}
              </NavDropdown.Item>
              <NavDropdown.Item href="#cursos/1.2">
                {t('navBar.courses.certificates').toUpperCase()}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('navBar.skills').toUpperCase()} id="basic-nav-dropdown">
              <NavDropdown.Item key={'technique'} href="#habilidades/1.1">
                {t('navBar.skills.techniques').toUpperCase()}
              </NavDropdown.Item>
              <NavDropdown.Item key={'person'} href="#habilidades/1.2">
                {t('navBar.skills.personal').toUpperCase()}
              </NavDropdown.Item>
            </NavDropdown>
            <div style={{ display: 'flex', width: '200px', justifyContent: 'end' }}>
              {languages.map((language, index) => {
                const marginLeftIcon = index === 1 ? '10px' : '';
                const opacity = i18n.resolvedLanguage === language.name ? '0.4' : '';
                return (
                  <>
                    <button
                      key={index}
                      style={{
                        border: 'none',
                        background: 'none',
                        width: '50px',
                        marginLeft: marginLeftIcon
                      }}
                      onClick={() => i18n.changeLanguage(language.name)}
                      disabled={i18n.resolvedLanguage === language.name}
                      type="submit">
                      <img style={{ width: '50px', opacity: opacity }} src={language.src} />
                    </button>
                  </>
                );
              })}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
