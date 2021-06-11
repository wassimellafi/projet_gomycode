import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Courses = (props) => {
    return (
        <div className="container-fluid">
            <Link to={"/course/" + props.movie.category}>
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>{props.movie.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
export default Courses;
