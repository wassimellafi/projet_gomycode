import React, { useState } from "react";
import Courses from "../Courses/courses";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
const CoursesList = (props) => {
    const questions = useSelector((state) => state.questionReducer.question);
    console.log(questions);

    return (
        <Container>
            <Row>
                {props.courses.map((question, key) => {
                    return (
                        <Col key={question.id}>
                            <Courses question={question} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};
export default CoursesList;
