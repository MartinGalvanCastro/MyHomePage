import porfilePic from "../assets/perfil.jpg";
import "./myInfo.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Container from "react-bootstrap/esm/Container";

const socialMedia = ["linkedin", "email", "whatsapp", "github"];

type linkInfo = {
  [key: string]: any;
};

const onClickMap: linkInfo = {
  linkedin: {
    url: "https://www.linkedin.com/in/martin-david-galvan-castro-0809a0201/",
    logo: <FaLinkedinIn />,
  },
  email: {
    url: "mailto:martin2galvan@hotmail.com?cc=md.glavan@uniandes.edu.co",
    logo: <FaEnvelope />,
  },
  whatsapp: {
    url: "https://wa.me/573057066739",
    logo: <FaWhatsapp />,
  },
  github: {
    url: "https://github.com/MartinGalvanCastro",
    logo: <FaGithub />,
  },
};

/**
 * Component for loading My Information
 */
const MyInfo = () => {
  return (
    <Container id="data-container" className="mb-sm-2">
      <Row className="img-container">
        <img
          className="img-fluid rounded"
          src={porfilePic}
          alt="porfile_pic"
          id="porfile_pic"
          loading="lazy"
        />
      </Row>
      <Container>
        <h3>Martin Galvan</h3>
        <span>Full Stack Developer</span>
      <hr/>
      <Row className="d-flex justify-content-center">
        <p>Click on one of them below to contact me:</p>
        <Row className="mb-3">
          {socialMedia.map((link: string) => {
            const sm = onClickMap[link];
            if (link !== "github") {
              return (
                <Col className="icon text-center" key={link}>
                  <a href={sm.url}>{sm.logo}</a>
                </Col>
              );
            } else {
              return null;
            }
          })}
        </Row>
        <p>Or check my Github:</p>
        <Row className="mb-4">
          <Col className="icon text-center"><a href={onClickMap["github"].url}>{onClickMap["github"].logo}</a>
          </Col>
        </Row>
      </Row>
      </Container>
    </Container>
  );
};

export default MyInfo;
