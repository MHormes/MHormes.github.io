import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clipperms from "../../Assets/Projects/clipperms.png";
import flowcontrol from "../../Assets/Projects/flowcontrol.png";
import neuralHome from "../../Assets/Projects/neuralhome.jpg";
import stage from "../../Assets/Projects/picture-stage.png";
import gradReport from "../../Assets/Projects/grad_defense_pres.png";
import gradProject from "../../Assets/Projects/grad_screenshot.png";
import limaxReport from "../../Assets/Projects/intern_report.pdf";
import quadReport from "../../Assets/Projects/grad_report.pdf";
import clippermicro from "../../Assets/Projects/kub-architec.png";
import zenya from "../../Assets/Projects/zenya-ss.png";
import mediabazaar from "../../Assets/Projects/mediabazaar.png";
import smokeit from "../../Assets/Projects/smokeit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is some of the work that I've done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clipperms}
              title="ClipperMS"
              description="Java (Spring) & React.js web application created as a free time side project. A system for managing a collection of collectable Clipper lighters"
              ghLink="https://github.com/MHormes/Clipper-MS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowcontrol}
              title="Flowcontrol"
              description="A Java (spring) & Vue.js web application I have been working on at Limax B.V. This application is intended to digitalize the business process of Limax. Private repository. Contact me to gain viewing access"
              ghLink="https://github.com/rikp777/Flowcontrol"
              demoLink="https://flowcontrol.limax.nl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gradProject}
              title="Quad Solutions"
              description="Links to the FE repository for my graduation assignment. This web application is integrated with Yoobi and provides analysis and projections on booked hours"
              ghLink="https://github.com/MHormes/graduation-fe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gradReport}
              title="Graduation report"
              description="I was tasked to research and create an integration with their hour booking tools to create various analysis and projections."
              fileLink={quadReport}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clippermicro}
              title="ClipperMS - Microservices"
              description="Java (Spring) & React.js web application created as as school project. Java (Spring) & React.js web application created as as school project"
              ghLink="https://github.com/MHormes/Clipper-MS-Microservices"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zenya}
              title="Zenya Boost Moderation"
              description="C# (.NET) & Vue.js web application, created as group project during my studies. A web application intended simplify the life of moderators"
              ghLink="https://github.com/MHormes/Zenya-Boost-Moderation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stage}
              title="Internship report"
              description="The report concluding my internship at Limax. I was tasked to research and create a fitting security implementation to secure the Flowcontrol system."
              fileLink={limaxReport}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuralHome}
              title="Neural Home"
              description="A simple React.js front end, which uses Axios Api calls to communicate with the Emotiv Cortex API. The goal of this project was to help impaired people use their home automation devices with nothing but their brain activity."
              ghLink="https://github.com/MHormes/S4RB-CT-Home-Automation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smokeit}
              title="Smoke-IT"
              description="Java (Spring) & React.js web application created as individual project during my studies. A web application intended to sell subscription boxes."
              ghLink="https://github.com/MHormes/S3CB-Smoke-IT"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediabazaar}
              title="Media Bazaar"
              description="A C# .NET windows form application created as group project during my studies. This project was performed in a team of 5 students. The goal of the project was to create a warehouse and employee management tool for a made-up company"
              ghLink="https://github.com/MHormes/S2CB-LAMN-software"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
