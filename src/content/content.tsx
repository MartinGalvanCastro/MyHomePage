import React from "react";
import Container from "react-bootstrap/esm/Container";
import CV from "./cv/cv";
import Home from "./home/home";
import Portafolio from "./portafolio/portafolio";
import Resume from "./resume/resume";
import './content.css'

interface ContentProps {
  contentId: String;
}

const Content: React.FC<ContentProps> = (props) => {

  let content:any = undefined
  
  switch (props.contentId) {
    case "home": {
      content = <Home />;
      break;
    }

    case "portafolio": {
      content = <Portafolio />;
      break;
    }

    case "resume": {
      content = <Resume />;
      break
    }

    case "cv": {
      content = <CV />;
      break
    }

    default: {
      return <h1>Content not found</h1>;
    }
  }

  return(
    <Container id='content-container'>
      {content}
    </Container>
  )

};

export default Content;
