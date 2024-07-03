import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cyber from "../../Assets/Projects/Cyber.png";

import editor from "../../Assets/Projects/editor.png";
import facial from "../../Assets/Projects/Facial.jpeg";
import myfitness from "../../Assets/Projects/myfitness.png";
import predict from "../../Assets/Projects/predict.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predict}
              isBlog={false}
              title="Score Predictor"
              description="Developed a Streamlit application for predicting final cricket scores using a pre-trained machine learning model."
              ghLink="https://github.com/rawat-mayank/Score_predictor"
              demoLink="https://predict-score.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Collaborative text editor"
              description="Developed a real-time collaborative text editor using Node.js, Express.js, React.js, and Socket.io."
              ghLink="https://github.com/rawatshahab/Docs_frontend"
              demoLink="https://docs-frontendd.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={facial}
              title="Facial Expression detection"
              description="Web application which access the users web cam to capture the facial expression and predict the emotion like happy,sad,angry etc."
              ghLink="https://github.com/rawatshahab/Facial_Expression"
              demoLink="https://facial-expression-omega.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myfitness}
              isBlog={false}
              title="myFitness"
              description="Created and optimized a comprehensive Fitness website targeting sedentary lifestyles with a vast dataset containing 1300+ exercises and also provides youtube tutorials"
              ghLink="https://github.com/rawatshahab/myFitness"
              demoLink="https://my-fitness-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyber}
              isBlog={false}
              title="Cyber Gamez"
              description="Engineered an immersive gaming website featuring a plethora of interactive games complemented by simulated download links for a seamless user experience."
              ghLink="https://github.com/rawatshahab/GamingWebsite/tree/main"
              demoLink="https://gaming-website-three.vercel.app/"/>
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
