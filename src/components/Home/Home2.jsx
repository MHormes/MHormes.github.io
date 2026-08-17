import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/maarten.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1>
              Let me <span className="purple">introduce</span> myself
            </h1>
            <p className="home-about-body">
              I&apos;m a Full-Stack Software Engineer who loves transforming
              ideas into reliable, scalable products, from server setup to
              frontend design. I like to get things done, properly!
              <br />
              <br />I gained most of my experience through building web
              applications with
              <i>
                <b className="purple"> JavaScript/TypeScript frameworks </b>
              </i>
              and
              <i>
                <b className="purple"> Java (Spring Boot)</b>
              </i>
              .
              <br />
              <br />I also have experience with
              <i>
                <b className="purple"> Kotlin, C#, PHP</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">SQL</b>
              </i>
              , along with lots of tools and frameworks.
              <br />
              <br />I have an interest in
              <i>
                <b className="purple"> Web Security</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Server &amp; VM Management</b>
              </i>{" "}
              and I run a home lab with{" "}
              <i>
                <b className="purple">Proxmox</b>
              </i>{" "}
              for self-hosting and a{" "}
              <i>
                <b className="purple">TrueNAS</b>
              </i>{" "}
              server.
              <br />
              <br />I like building things, from
              <i>
                <b className="purple"> Web Applications</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Obsidian plugins</b>
              </i>{" "}
              to{" "}
              <i>
                <b className="purple">IoT/Smart Home</b>
              </i>{" "}
              setups on my home servers.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid profile-image"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
