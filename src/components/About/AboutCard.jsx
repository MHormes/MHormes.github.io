import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hello there. I&apos;m <span className="purple">Maarten Hormes</span>{" "}
            from <span className="purple">Roermond, Netherlands</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight />
              <span>
                Software Engineer at AZL - Developing Kotlin applications to
                support the WTP transition at AZL
              </span>
            </li>
            <li className="about-activity">
              <ImPointRight />
              <span>
                Sole developer of{" "}
                <a
                  href="https://clipper-ms.com"
                  target="_blank"
                  rel="noreferrer"
                  className="purple"
                >
                  Clipper-MS
                </a>{" "}
                and{" "}
                <a
                  href="https://printer.clipper-ms.com"
                  target="_blank"
                  rel="noreferrer"
                  className="purple"
                >
                  Print2Play
                </a>
              </span>
            </li>
            <li className="about-activity">
              <ImPointRight />
              <span>Running a home lab with Proxmox and TrueNAS</span>
            </li>
          </ul>

          <p>Outside of coding, I keep myself busy with:</p>

          <ul>
            <li className="about-activity">
              <ImPointRight />
              <span>
                Writing and playing music in{" "}
                <a
                  href="https://sidetracksounds.nl"
                  target="_blank"
                  rel="noreferrer"
                  className="purple"
                >
                  SideTrack
                </a>
              </span>
            </li>
            <li className="about-activity">
              <ImPointRight />
              <span>
                Playing football at{" "}
                <a
                  href="https://vvhebes.nl"
                  target="_blank"
                  rel="noreferrer"
                  className="purple"
                >
                  VV Hebes
                </a>
              </span>
            </li>
            <li className="about-activity">
              <ImPointRight />
              <span>Playing D&amp;D with friends</span>
            </li>
            <li className="about-activity">
              <ImPointRight />
              <span>Documenting my life and projects in Obsidian</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
