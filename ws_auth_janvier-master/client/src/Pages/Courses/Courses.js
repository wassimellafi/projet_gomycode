import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Courses = (props) => {
    const question = useSelector((state) => state.questionReducer.question);
    console.log("questionscourses", question);
    return (
        <div className="container-fluid">
            <Link to={"/course/" + props.question._id}>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={props.question.category} />
                    <Card.Body>
                        <Card.Title>{props.question.description}</Card.Title>
                        <Card.Text>{props.question.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
export default Courses;
