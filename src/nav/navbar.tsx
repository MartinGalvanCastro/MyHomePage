import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

interface FuncProps{
  setContent(arg:string):void
}

const CustomNavBar: React.FC<FuncProps> = ({setContent}) => {
  const [t, ] = useTranslation("global");


  const onClick = (event:any) =>{
    const id = event.target.id.split('-')[0]
    setContent(id)
  }

  return (
    <Navbar
      className="rounded border-top border-bottom mb-2"
      id="navbar"
      collapseOnSelect
      expand="sm"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container>
          <Nav className="me-auto" defaultActiveKey="/home">
            <Nav.Link
              onClick={onClick}
              id="home-nav"
              className="rounded-start"
            >
              HOME
            </Nav.Link>
            <Nav.Link onClick={onClick} id="resume-nav">
              {t("navbar.resume")}
            </Nav.Link>
            <Nav.Link onClick={onClick} id="portafolio-nav">
              {t("navbar.portafolio")}
            </Nav.Link>
            <Nav.Link href='CV_Martin_Galvan.pdf' id="cv-nav">
              {t("navbar.cv")} CV
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavBar;
