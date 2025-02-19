import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Particle from "../Particle";
import Type from "../Home/Type";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container style={{ margin: "20px 20px" }}>
        <Row>
          <Col md={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27895.8335516403!2d-1.1565638286583586!3d52.62593877177834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879ddcfc377f7cd%3A0xd91c9efcc41fdd79!2sDe%20Montfort%20University!5e1!3m2!1sen!2suk!4v1709146920972!5m2!1sen!2suk" width="1800" height="600" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>

      <Container fluid className="project-section p-0" >
        <Row style={{ justifyContent: "center", padding: "0px 60px" }}>
          <Col md={6} className="project-card" style={{ paddingRight: "100px" }}>
            <Card className="project-card-view">
              <Card.Body>
                <Type string={[
                  "Contact Us"
                ]} />
                <ContactusForm />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Timing />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

function Timing() {
  return <Card className="project-card-view">
    <Card.Body style={{ fontSize: "25px", textAlign: "left" }}>
      <div style={{ alignItems: "center" }}>
        <p>We are available <span className="purple">Monday - Friday, 9am to 4pm BST.</span></p>
        <p>Average response time during <span className="purple">business hours is 8.</span></p>
        <p><span className="purple">Email: </span>e-votehub@gmail.com</p>
        <p><span className="purple">Address: </span>Gateway House, Leicester LE1 9BH  </p>
      </div>

    </Card.Body>
  </Card >
}

function ContactusForm() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/contact", { email, subject, message })
      .then(result => {
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch(err => console.log(err))
  }

  return (
    <Form onSubmit={Submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" value={subject} placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Your Message" value={message} rows={3} onChange={(e) => setMessage(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
