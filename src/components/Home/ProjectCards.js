import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Header>
        {props.imgPath}
      </Card.Header>
      <Card.Body>
        <Card.Title><h2>{props.title}</h2></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <p style={{ padding: "20px", fontSize: "20px" }}>{props.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
