import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import data from "./data.json";
import './resume.css'
import { FaUserGraduate } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

interface IStudyItem {
  name: string;
  where: string;
  during: string;
}

interface IWorkpalceItem {
  name: string;
  where: string;
  during: string;
  description: string;
}

const renderStudies = (study: IStudyItem) => {
  return (
    <li key={study.name} className="mb-4 study-item">
      <span className="fa-li"><i><FaUserGraduate/></i></span>
      <Container>
        <h5>{study.name}</h5>
        <p>
          <strong>At: </strong> {study.where} 
          <br /> <strong>During: </strong>{" "}
          {study.during}
        </p>
      </Container>
    </li>
  );
};

const renderWork = (workplace: IWorkpalceItem) => {
  return (
    <li key={workplace.name} className="mb-4">
      <span className="fa-li"><i><MdWork/></i></span>
      <Container>
        <h5>{workplace.name}</h5>
        <p>
          <strong>At: </strong> {workplace.where} <br />
          <strong>Between: </strong>
          {workplace.during}
          <br />
          <strong>Doing: </strong>
          {workplace.description}
        </p>
      </Container>
    </li>
  );
};

const Resume = () => {
  return (
    <Container>
      <Row className="mt-3 mb-2">
        <section className="col col-6 border-end">
          <Row className="mb-3">
            <h3>My Studies </h3>
          </Row>
          <ul className="fa-ul">{data.education.map((item) => renderStudies(item))}</ul>
        </section>
        <section className="col col-6 border-start">
          <Row className="mb-3">
            <h3>My Working Experience </h3>
          </Row>
          <ul className="fa-ul">{data.work.map((item) => renderWork(item))}</ul>
        </section>
      </Row>
    </Container>
  );
};

export default Resume;
