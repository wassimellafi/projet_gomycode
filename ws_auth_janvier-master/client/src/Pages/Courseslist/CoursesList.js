import React, { useState } from "react";
import Courses from "../Courses/courses";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Button, MenuItem, TextField } from "@material-ui/core";
const CoursesList = ({ allquestions }) => {
    const question = useSelector((state) => state.questionReducer.question);
    console.log("questionscourses", question);
    return (
        <Container>
            <b>{question && question.description}</b>
            {/* <Row>
                {question.map((cat) => (
                    <MenuItem key={cat._id} value={cat._id}>
                        {cat.description}
                    </MenuItem>
                ))}
            </Row> */}
        </Container>
    );
};
export default CoursesList;
