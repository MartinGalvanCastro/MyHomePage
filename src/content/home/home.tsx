import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data.json";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./home.css";

interface ISkillObject {
  name: string;
  level: string;
  logo: string;
}

interface ICapabilityObject {
  name: string;
  logo: string;
}

const renderCapability = (data: ICapabilityObject) => {
  return (
    <Col key={data.name} className="mt-4">
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <img
              src={require(`../../assets/${data.logo}`)}
              alt={data.name}
              className="img-fluid capability-logo"
            />
          </Col>
          <Col>
            <p>{data.name}</p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

const renderSkill = (data: ISkillObject) => {
  return (
    <Col key={data.name}>
      <Card className="skill-card text-center">
        <Card.Img
          variant="top"
          src={require(`../../assets/${data.name.toLowerCase()}.svg`)}
          className="img-fluid skill-logo"
          alt={data.name}
        />
        <Card.Body>
          <Card.Text>{data.level}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Home = () => {
  return (
    <Container>
      <Row className="mt-3 mb-2">
        <section className="col">
          <h3>About Me:</h3>
          <p>
            Mechanical and Software Engineer graduated from the Universidad De
            Los Andes. With experience working with Python, Django, ROSpy, Java,
            Matlab, SQL, and SQL Databases, MongoDB, NodeJS, ExpressJS, React,
            AWS and Firebase. With interest in Robotics, Artificial
            Intelligence, Software Development, and Architecture, Modeling,
            Simulation, and Optimization and aspirations to become a great Full Stack
            Engineer
          </p>
        </section>
      </Row>
      <Row className="mt-3 mb-2 d-flex justify-content-center">
        <section className="col">
          <h3>Skills:</h3>
          <Container>
            <Row className="row-cols-xl-6 row-cols-lg-4 row-cols-md-2 row-cols-sm-3 row-cols-2">
              {data.skills.map((skill) => renderSkill(skill))}
            </Row>
          </Container>
        </section>
      </Row>
      <Row className="mt-3 mb-2">
        <section className="col">
          <h3>Capable Of:</h3>
          <Row className="row-cols-1 row-cols-lg-2 mt-2">
            {data.capable_of.map((capability) => renderCapability(capability))}
          </Row>
        </section>
      </Row>
    </Container>
  );
};

export default Home;
