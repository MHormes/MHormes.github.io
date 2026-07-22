import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/avatar.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="about-intro-row">
            <Col md={7} className="about-copy-col">
              <h1>
                Know Who <strong className="purple">I AM</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col md={5} className="about-img">
              <Tilt>
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Tilt>
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
