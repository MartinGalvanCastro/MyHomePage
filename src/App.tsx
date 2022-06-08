import React,{useState} from "react";
import "./App.css"
import ParticleBackground from "./particleBackgorund/particleBackground";
import CustomNavBar from "./nav/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./footer/footer";
import Card from "react-bootstrap/Card";
import MyInfo from "./myInfo/myInfo";
import Content from "./content/content"

function App() {

  const [content,setContent] = useState('home')
  console.log(content)

  return (
    <>
    <Container className="App mx-center" id="main-container">
    <ParticleBackground />
      <Row>
        <Col lg={3} md={4} className="mx-auto">
          <MyInfo />
        </Col>
        <Col lg={9} md={8}>
        <CustomNavBar setContent={setContent}/>
          <Card className="content-container">
            <Card.Body>
              <Content contentId={content}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    
    </>
  );
}

export default App;
