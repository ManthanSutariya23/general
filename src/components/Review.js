import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VscStarFull } from "react-icons/vsc";
import Card from "react-bootstrap/Card";
import Type from "./Home/Type";
import axios from 'axios';
import Preloader from "../components/Pre";

function Review() {

    let [review, setReview] = useState();
    let [loading, setLoading] = useState(true);

    function getReview() {
        axios.get("http://localhost:8080/review", {
        }).then((data) => {
            setReview(data.data)
            console.log(data.data)
            setLoading(false)
        })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getReview()
    }, [])

    return (
        <Container className="pt-5 mt-5 mb-5">
            <Row>
                <Col md={12} className="home-header">
                    <h1 style={{ paddingBottom: 15, color: "white" }}>
                        Review
                    </h1>

                    <p style={{ paddingLeft: 50 }}>
                        <Type string={[
                            "See why E-VoteHub is the most popular online voting platform."
                        ]} />
                    </p>
                </Col>
                {loading ? (<Preloader load={loading} />) : review.map((item) => {
                    return <Col md={6} style={{ padding: "20px", }}>
                        <Card className="project-card-view">
                            <Card.Header>
                                <br />
                                {item.client_name}, {item.client_title}<br />
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span><VscStarFull /></span>
                                ))}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    <p style={{ padding: "20px", fontSize: "20px" }}>{item.review}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default Review;
