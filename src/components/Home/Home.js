import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/voting-demo.gif";
import Particle from "../Particle";
import Type from "./Type";
import Card from "react-bootstrap/Card";
import Projects from "./Projects";
import { VscStarFull } from "react-icons/vsc";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  const words = [
    {
      "name": "Manthan",
      "company": "University",
      "review": 3,
      "description": "This app is really good to use"
    },

    {
      "name": "Jeanine ",
      "company": "The Black Cultural Affairs Board",
      "review": 4,
      "description": "I appreciate how this is user friendly and made our student cultural group election fair without any bias. I cannot express how awesome this application was as a first time user."
    },

    {
      "name": "West Point Parents Club of Illinois",
      "company": "",
      "review": 5,
      "description": "Our election went well. The tool is easy to use and the price was right. We needed to extend the election over the weekend and support promptly replied and was able to help us. Great tool!"
    },

    {
      "name": "Elizabeth H.",
      "company": "Quad Moms",
      "review": 2,
      "description": "I was so happy with my first transaction with Election Runner! I made a couple of mistakes me their customer service dept was so nice and all about the customer! Wouldn't even think of using anyone else! A+++"
    },

    {
      "name": "Olaleye T.",
      "company": "E-VOTING GROUP",
      "review": 3,
      "description": "It is the best online election platform I have ever seen. I really enjoyed working on it."
    },

    {
      "name": "Ken D.",
      "company": "",
      "review": 5,
      "description": "We did the impossible this year. We held online student council elections, reducing a three-day process to 30 minutes. I was looking at an alternative platform but realised the day before that it was unworkable. I stumbled onto ElectionRunner and was not disappointed. It was easy to use and made the process exciting for all parties. I certainly recommend it."
    },

  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type string={[
                  "Create an election for your school or organization in seconds. Your voters can vote from any location on any device."
                ]} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects />
      <Container>
        <Row>
          <Col md={12} style={{ padding: "40px 0px" }}>
            <Type string={[
              "Review"
            ]} />
          </Col>
          {words.map((item) => {
            return <Col md={6} style={{ padding: "20px", }}>
              <Card className="project-card-view">
                <Card.Header>
                  <br />
                  {item.name}, {item.company}<br />
                  {Array.from({ length: item.review }, (_, i) => (
                    <span><VscStarFull /></span>
                  ))}
                </Card.Header>
                <Card.Body>
                  <Card.Text style={{ textAlign: "justify" }}>
                    <p style={{ padding: "20px", fontSize: "20px" }}>{item.description}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          })}
        </Row>
      </Container>
      <br />
      <Button as={Link} to={"/review"} variant="primary">
        <h4 style={{ margin: "20px 25px" }}>Read More Review</h4>

      </Button>
      <br />
      <br />
    </section >
  );
}



export default Home;
