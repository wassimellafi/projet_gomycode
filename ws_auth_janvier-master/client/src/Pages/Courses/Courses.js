import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Courses = (props) => {
    return (
        <>
            <Link to={"/course/" + props.movie._id}>
                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                    />
                    <Card.Body>
                        <Card.Title>{props.movie.title}</Card.Title>
                        <Card.Title>{props.movie.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );
};
export default Courses;
