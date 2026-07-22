import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading">Hi there.</h1>

              <h1 className="heading-name">
                I&apos;m
                <strong className="main-name"> Maarten Hormes</strong>
              </h1>

              <div className="typewriter-wrap">
                <Type />
              </div>
            </Col>

            <Col md={5} className="hero-visual">
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row className="social-row">
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mhormes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maarten-hormes/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.dothey.nl/devs/maarten-hormes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label=".Hey profile"
                >
                  <GoDotFill />
                </a>
              </li>
              <li className="contact-block">
                <p>
                  Or feel free to <span className="purple">contact </span>me on
                </p>
                <p>maarten.hormes@gmail.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
