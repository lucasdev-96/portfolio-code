import { FiGithub } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import whatssap from '../../assets/img/skills/frame.png';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyle';
import './Footer.css';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Currículo</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Contate-me</Heading>
            <img style={{ width: '150px' }} src={whatssap} alt="whatssap" />
          </Column>
          <Column>
            <Heading>Rede Sociais</Heading>
            <FooterLink href="https://www.instagram.com/lucazgodoy/" target="_blank">
              <div className="linkFooter">
                <BsInstagram />
                <div>Instagram</div>
              </div>
            </FooterLink>
            <FooterLink href="https://github.com/lucasdev-96" target="_blank">
              <div className="linkFooter">
                <FiGithub />
                <div>Github</div>
              </div>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/lucas-godoi96/" target="_blank">
              <div className="linkFooter">
                <GrLinkedin />
                <div>Linkedin</div>
              </div>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
