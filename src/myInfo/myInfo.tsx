import Card from "react-bootstrap/Card";
import porfilePic from "../assets/perfil.jpg";
import "./myInfo.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Container from "react-bootstrap/esm/Container";

const socialMedia = ["linkedin", "email", "whatsapp", "github"];


type linkInfo = {
  [key: string]:any
}

const onClickMap:linkInfo  = {
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
    <Card className="border-0">
      <div className="img-container">
        <Card.Img
          variant="top"
          src={porfilePic}
          alt="porfile_pic"
          className="img-fluid rounded"
          id="porfile_pic"
          loading="lazy"
        />
      </div>
      <Card.Body>
        <Card.Title>
          <h3>Martin Galvan</h3>
          <span>Full Stack Developer</span>
        </Card.Title>
        <Container id="data-container">
          Click on one of them below to contact me:
          <Row>
            {socialMedia.map((link:string) => {
              const sm = onClickMap[link]
              if (link !== "github") {
                return (<Col className="icon" key={link}>
                  <a href={sm.url}>{sm.logo}</a>
                </Col>);
              }
              else{
                return null
              }
            })}
          </Row>
          Or check my Github:
          <Row>
            <Col className="icon">
              <a href={onClickMap['github'].url}>{onClickMap['github'].logo}</a>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MyInfo;
