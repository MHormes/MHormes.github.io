import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={`${props.title} preview`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>

        <div className="project-actions">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub />
              GitHub
            </Button>
          )}

          {props.fileLink && (
            <Button variant="primary" href={props.fileLink} target="_blank">
              <CgWebsite />
              Report
            </Button>
          )}

          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite />
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
