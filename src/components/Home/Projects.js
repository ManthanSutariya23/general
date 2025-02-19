import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { VscKey, VscDeviceMobile, VscEdit, VscLock, VscMail, VscPieChart, VscVmConnect } from "react-icons/vsc";

function Projects() {
  const data = [
    {
      "title": "Secure Voting",
      "description": 'Each voter has a unique "Voter ID" and "Voter Key" and can only vote once.',
      "imgPath": <VscKey fontSize={"80px"} />
    },

    {
      "title": "Mobile Ready",
      "description": 'Elections are optimized for desktop and mobile devices. Voters can vote from a web browser or our iOS & Android apps.',
      "imgPath": <VscDeviceMobile fontSize={"80px"} />
    },

    {
      "title": "Custom Design",
      "description": 'Personalize your election with your organization\'s logo and colors. No HTML/CSS knowledge necessary.',
      "imgPath": <VscEdit fontSize={"80px"} />
    },

    {
      "title": "256-Bit Encryption",
      "description": 'All elections have SSL (https://) grade security with 256bit encryption that keeps your election and ballots secure.',
      "imgPath": <VscLock fontSize={"80px"} />
    },

    {
      "title": "Email Ballots",
      "description": 'Provide an optional email address for your voters and we\'ll notify them when your election launches.',
      "imgPath": <VscMail fontSize={"80px"} />
    },

    {
      "title": "Accessibility",
      "description": 'The voting application targets Section 508 and WCAG 2.0 AA compliance.',
      "imgPath": <VscVmConnect fontSize={"80px"} />
    },

    {
      "title": "Results Tabulation",
      "description": 'Election results are automatically calculated and presented with beautiful charts.',
      "imgPath": <VscPieChart fontSize={"80px"} />
    },

  ];
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Your <span className="purple">elections, </span> Any <span className="purple">device, </span> Any <span className="purple">location.</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {
            data.map((item) => {
              return <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={item.imgPath}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            })
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
