import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <footer id="footer" className="mt-3">
      <Container>
        <h5>About this website</h5>
        This website was designed for showing some of my work, knowledge and my
        resume. <br />
        This Website was build on React, and using the libraries tsParticles,
        I18next, React-Bootstrap. Also this website has enabled PWA.
        <br />
        If you are interested on my porfile, do not hesitate on contacting me
        email, Linkedin or Whatsapp.
      </Container>
    </footer>
  );
};

export default Footer;
