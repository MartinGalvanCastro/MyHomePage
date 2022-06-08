import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import './portafolio.css';
import data from './data.json';


interface IProjectItem{
  name:string,
  image:string,
  type:string,
  detailed:string,
  made:Array<String>,
  link:string
}


const renderModal = (show:boolean, handleClose:any, data:IProjectItem) =>{ 
  return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2>{data.name}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <h4>Description:</h4>
          {data.detailed}
          </p>
          <p>
          <h4>Made With:</h4>
          <ul>
            {data.made.map((tech,idx)=>{
              return <li key={idx}>{tech}</li>
            })}
          </ul>
          </p>
          <strong><a href={data.link}>Cick here to check it out on GitHib!!</a></strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}


const Portafolio = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)


  return (
    <Container>
      <Row className="mt-3 mb-2">
        <h3>Some of my Work:</h3>
      </Row>
      <Row xs={1}  sm={2} md={4} className="g-4 d-flex justify-content-between">
        {data.projects.map((project, idx) => (
          <Col key={`${idx}`} className="mb-4 project-card-col">
            <Card className="project-card-item">
              <Container>
              <Card.Body className="text-center p-2">
              <Card.Img  src={require(`../../assets/${project.image}`)} className="img-project mb-0"/>
              <hr className="mb-1 mt-2"/>
                <Card.Title>{project.name}</Card.Title>
                <Button variant="primary" onClick={handleShow}>Know More!!</Button>
              </Card.Body>
              </Container>
              {renderModal(show,handleClose,project)}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portafolio;
