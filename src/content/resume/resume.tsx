import Container from "react-bootstrap/Container";
import construction from "../../assets/pending.svg";

const Resume = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <img
        src={construction}
        alt="Under Construction"
        className="img-fluid construction"
      />
      <div className="ml-2">
        <h3>Working on it. It will be ready soon</h3>
      </div>
    </Container>
  );
};

export default Resume;
