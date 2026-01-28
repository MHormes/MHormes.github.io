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
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. I like to get things done, properly!
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript and Java (Springboot){" "}
                </b>
              </i>
              — and I enjoy working on full-stack projects.
              <br />
              <br />
              Besides that I have experiences with
              <i>
                <b className="purple"> Python, C#, SQL, Web Security </b>
              </i>
              and lots of tools and frameworks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, IOT/Smart Home systems and Obsidian
                  plugins.{" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Springboot </b> and modern JavaScript
              frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Vue.js</b>.
              </i>
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
