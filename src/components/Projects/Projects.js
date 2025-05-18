import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sahaai from "../../assets/Projects/sahaai.png";

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
              imgPath={sahaai}
              isBlog={false}
              title="SAHA-PERSONALIZATION AI-CHATBOT "
              description="Developed a dynamic AI chatbot web application called CAREBOT, which integrates with the OpenAI GPT-3.5 model to simulate human-like conversations. The app includes user authentication, personalized chat experiences, and the ability for users to train the bot with new Q&A data. Stack: Python, ReactJS, Flask, Assembly AI, OpenAI API, Twilio"
              ghLink="https://github.com/SUYAMBULINGAMM/SAHA-PERSONALIZED-AI-CHATBOT"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;