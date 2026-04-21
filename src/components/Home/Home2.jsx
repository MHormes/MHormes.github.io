import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/maarten.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Full-Stack Software Engineer who loves transforming ideas into
              reliable, scalable products — from server setup to frontend design.
              I like to get things done, properly!
              <br />
              <br />
              At work I mostly build web apps using
              <i>
                <b className="purple"> JavaScript/TypeScript frameworks </b>
              </i>
              and
              <i>
                <b className="purple"> Java (Spring Boot)</b>
              </i>
              .
              <br />
              <br />
              I also have experience with
              <i>
                <b className="purple"> Python, C#, PHP</b>
              </i>
              {" "}and{" "}
              <i>
                <b className="purple">SQL</b>
              </i>
              , along with lots of tools and frameworks.
              <br />
              <br />
              I have an interest in
              <i>
                <b className="purple"> Web Security</b>
              </i>
              {" "}and{" "}
              <i>
                <b className="purple">Server &amp; VM Management</b>
              </i>
              {" "}— I run a home lab with Proxmox for self-hosting.
              <br />
              <br />
              I like building things — from
              <i>
                <b className="purple"> Web Applications</b>
              </i>
              {" "}and{" "}
              <i>
                <b className="purple">Obsidian plugins</b>
              </i>
              {" "}to{" "}
              <i>
                <b className="purple">IoT/Smart Home</b>
              </i>
              {" "}setups on my home server.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid "
                alt="avatar"
                style={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.99s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
