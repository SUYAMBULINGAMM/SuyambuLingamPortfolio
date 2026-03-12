<<<<<<< HEAD
import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="SUYAMBULINGAMM"
        blockSize={15}
        blockMargin={5}
        color="#14ffec"
        fontSize={16}
      />
    </Row>
  );
}

=======
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="SUYAMBULINGAMM"
        blockSize={15}
        blockMargin={5}
        color="#14ffec"
        fontSize={16}
      />
    </Row>
  );
}

>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
export default Github;