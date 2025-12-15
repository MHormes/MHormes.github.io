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
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={podman} alt="podman" className="tech-icon-images" />
        <div className="tech-icons-text">Podman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images"/>
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Github} alt="Github" className="tech-icon-images"/>
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={DigitalOcean} alt="DigitalOcean" className="tech-icon-images"/>
        <div className="tech-icons-text">DigitalOcean</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Vercel} alt="Vercel" className="tech-icon-images"/>
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Obsidian} alt="Obsidian" className="tech-icon-images"/>
        <div className="tech-icons-text">Obsidian</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
