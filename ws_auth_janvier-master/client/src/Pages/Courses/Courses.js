import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Courses = (props) => {
    const questions = useSelector((state) => state.questionReducer.question);
    console.log("questions", questions);
    return (
        <div className="container-fluid">
            <Link to={"/course/" + props.question.id}>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={props.question.title} />
                    <Card.Body>
                        <Card.Title>{props.question.title}</Card.Title>
                        <Card.Text>{props.question.title}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
export default Courses;
