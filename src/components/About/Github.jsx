import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";

function Github() {
  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewPortWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = viewPortWidth < 768;
  const blockSize = isMobile ? 16 : 18;
  const fontSize = isMobile ? 11 : 12;
  const blockMargin = isMobile ? 4 : 5;

  return (
    <Row className="github-row">
      <h1 className="project-heading pb-4">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="mhormes"
        blockSize={blockSize}
        blockMargin={blockMargin}
        color="#6c7cff"
        fontSize={fontSize}
      />
    </Row>
  );
}

export default Github;
