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
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Full-stack Software Engineer at Limax B.V. —
              building{" "}
              <a
                href="https://flowcontrol.limax.nl"
                target="_blank"
                rel="noreferrer"
                className="purple"
              >
                Flowcontrol
              </a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Part of tech company{" "}
              <a
                href="https://www.dothey.nl"
                target="_blank"
                rel="noreferrer"
                className="purple"
              >
                .Hey
              </a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Sole developer of{" "}
              <a
                href="https://clipper-ms.com"
                target="_blank"
                rel="noreferrer"
                className="purple"
              >
                Clipper-MS.com
              </a>
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Outside of coding, I keep myself busy with:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing and playing music in{" "}
              <a
                href="https://sidetracksounds.nl"
                target="_blank"
                rel="noreferrer"
                className="purple"
              >
                Sidetrack
              </a>{" "}
              🎵
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
