import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";

function Github() {

const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);

  // Update width on resize
  useEffect(() => {
    const handleResize = () => setViewPortWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = viewPortWidth < 768;
  const blockSize = isMobile ? 25 : 30; // Smaller blocks on mobile
  const fontSize = isMobile ? 15 : 20;  // Smaller text on mobile
  const blockMargin = isMobile ? 6 : 10; // Smaller margin on mobile


  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="mhormes"
        blockSize={blockSize}
        blockMargin={blockMargin}
        color="#1b51e7ff"
        fontSize={fontSize}
      />
    </Row>
  );
}

export default Github;
