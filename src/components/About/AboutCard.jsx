import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there. I’m <span className="purple">Maarten Hormes</span> from{" "}
            <span className="purple">Roermond, Netherlands</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Full-stack Software Engineer</span> at{" "}
            <span className="purple">Limax B.V.</span>
            <br />
            Here I develop software for our in-house ERP:{" "}
            <span className="purple">Flowcontrol.</span>
            <br />
            I'm also part of the tech company{" "}
            <span className="purple">.Hey</span>
            <br />
            And sole developer and maintainer of{" "}
            <span className="purple">Clipper-MS.com</span>
            <br />
            <br />
            Outside of coding, I have a few interests that keep my creative side
            busy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing and playing music 🎵
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing and printing 3D models 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing D&D with friends 🎲
            </li>
            <li className="about-activity">
              <ImPointRight /> Documenting my life and projects in Obsidian 📝
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
