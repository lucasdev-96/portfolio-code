import { FiGithub } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import whatssap from '../../assets/img/skills/frame.png';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyle';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import { SiWhatsapp } from 'react-icons/si';
import resumeEN from '../../assets/img/skills/resumeEN.pdf';
import resumePT from '../../assets/img/skills/curriculoPt.pdf';
import { useContext } from 'react';
import { ResumeContext } from '../../Context/ResumeContext';

const Footer = () => {
  const { language } = useContext(ResumeContext);
  console.log(language);
  const { t } = useTranslation();
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>{t('footer.curriculum')}</Heading>
            <a className="linkCurriculum" href={language === 'pt' ? resumePT : resumeEN} download>
              Download
            </a>
          </Column>
          <Column>
            <Heading>{t('footer.contact')}</Heading>
            <FooterLink href="https://wa.me/5519971341427" target="_blank">
              <div className="linkFooter">
                <SiWhatsapp />
                <div>Whatssap</div>
              </div>
            </FooterLink>
            <img style={{ width: '150px' }} src={whatssap} alt="whatssap" />
          </Column>
          <Column>
            <Heading>{t('footer.socialMedia')}</Heading>
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
