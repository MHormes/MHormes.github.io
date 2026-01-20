import React from "react";
import { Col, Row } from "react-bootstrap";
import firefox from "../../Assets/TechIcons/Firefox.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import podman from "../../Assets/TechIcons/Podman.svg";
import Github from "../../Assets/TechIcons/GitHub.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Obsidian from "../../Assets/TechIcons/Obsidian.svg";
import datagrip from "../../Assets/TechIcons/DataGrip.svg";
import DigitalOcean from "../../Assets/TechIcons/Digital Ocean.svg";
import Vercel from "../../Assets/TechIcons/Vercel.svg";
import Cloudflare from "../../Assets/TechIcons/Cloudflare.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={firefox} alt="Firefox" className="tech-icon-images" />
        <div className="tech-icons-text">Firefox</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="intellij" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={datagrip} alt="datagrip" className="tech-icon-images" />
        <div className="tech-icons-text">DataGrip</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={podman} alt="podman" className="tech-icon-images" />
        <div className="tech-icons-text">Podman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Github} alt="Github" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={DigitalOcean}
          alt="DigitalOcean"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">DigitalOcean</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Vercel} alt="Vercel" className="tech-icon-images" />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
          aria-label="Render"
          width="20"
          height="20"
          class="render-logo-fill"
        >
          <path d="M26.827.01c-4.596-.216-8.461 3.107-9.12 7.487-.027.203-.066.4-.099.596-1.025 5.454-5.797 9.584-11.53 9.584a11.67 11.67 0 0 1-5.634-1.442.298.298 0 0 0-.444.262v18.854h17.602V22.097c0-2.439 1.971-4.419 4.4-4.419h4.4c4.982 0 8.99-4.15 8.795-9.197C35.02 3.937 31.35.226 26.827.01Z"></path>
        </svg>
        <div className="tech-icons-text">Render</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <svg
          width="26px"
          height="26px"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
        >
          <path
            d="M58 0.0162365V58L35.3688 38.5587V58H0V0L58 0.0162365ZM7.10962 50.9603H28.2591V23.1112L50.8907 42.937V7.05391L7.10962 7.04147V50.9603Z"
            fill="#37C38F"
          ></path>
        </svg>
        <div className="tech-icons-text">Neon</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cloudflare} alt="Cloudflare" className="tech-icon-images" />
        <div className="tech-icons-text">Cloudflare</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Obsidian} alt="Obsidian" className="tech-icon-images" />
        <div className="tech-icons-text">Obsidian</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
