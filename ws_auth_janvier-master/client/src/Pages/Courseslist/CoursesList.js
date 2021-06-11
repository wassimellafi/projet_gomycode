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
    const question = useSelector((state) => state.questionReducer.question);
    const category = useSelector((state) => state.questionReducer.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allquestion());
        dispatch(category());
    }, []);
    console.log("question", question);
    console.log("category", category);

    return (
        <div className="settings__select">
            {/* <TextField
                select
                label="Select Category"
                variant="outlined"
                style={{ marginBottom: 30 }}
            >
                {question.map((ques) => (
                    <MenuItem key={ques._id} value={ques._id}>
                        {ques._id}
                    </MenuItem>
                ))}
            </TextField> */}
            <Container>
                <Row>
                    {question.map((movie, key) => {
                        return (
                            <Col key={movie._id}>
                                <Courses movie={movie} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            {/* <TextField
                select
                label="Select Difficulty"
                variant="outlined"
                style={{ marginBottom: 30 }}
            >
                <MenuItem key="Easy" value="easy">
                    Easy
                </MenuItem>
                <MenuItem key="Medium" value="medium">
                    Medium
                </MenuItem>
                <MenuItem key="Hard" value="hard">
                    Hard
                </MenuItem>
            </TextField> */}
        </div>
    );
};
export default CoursesList;
