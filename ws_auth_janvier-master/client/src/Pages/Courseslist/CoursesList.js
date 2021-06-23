import React, { useEffect, useState } from "react";
import Courses from "../Courses/courses";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { allquestion } from "../../Redux/actions/question";
import { category } from "../../Redux/actions/question";
import "./CoursesList.css";
const CoursesList = () => {
    const question = useSelector((state) => state.questionReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allquestion());
        dispatch(category());
    }, []);
    console.log("question", question);

    return (
        <div className="landpage">
            <div className="cover">
                <h1>welcome from the test</h1>
                {/* <Row>
                    {question.category.map((movie, key) => {
                        return (
                            <Col key={movie._id}>
                                <Courses movie={movie} />
                            </Col>
                        );
                    })}
                </Row> */}
                <form className="flex-form"></form>
            </div>
        </div>
    );
};
export default CoursesList;
