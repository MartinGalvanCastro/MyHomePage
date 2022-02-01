import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import construction from "../../assets/pending.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import './portafolio.css'


interface IProjectItem{
  name:string,
  image:string,
  type:string,
  detailed:string,
  mafe:Array<String>
}


const renderModal = (show:boolean, handleClose:any, data?:IProjectItem, name?:string) =>{ 
  return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Cooming Soon`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>I'm working on it</Modal.Body>
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
    <Container className="">
      <Row className="mt-3 mb-2">
        <h3>Some of my Work:</h3>
      </Row>
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={`${idx}`} className="mb-4">
            <Card>
              <Container>
              <Card.Img variant="top" src={construction} className="img-project"/>
              <Card.Body className="text-center mb-2 mt-3 border-top p-2">
                <Card.Title>Card title</Card.Title>
                <Button variant="primary" onClick={handleShow}>Know More!!</Button>
              </Card.Body>
              </Container>
              {renderModal(show,handleClose,undefined,undefined)}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portafolio;
