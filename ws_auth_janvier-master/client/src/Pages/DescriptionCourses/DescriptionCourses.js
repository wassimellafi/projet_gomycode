import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useSelector, useDispatch } from "react-redux";
import { allquestion } from "../../Redux/actions/question";
function DescriptionCourses(props) {
    const question = useSelector((state) => state.questionReducer);
    const ques = question.category.find(
        (ques) => ques._id === props.match.params.id
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allquestion());
    }, []);
    return (
        <Container>
            <h1>{ques.title}</h1>
            <h5></h5>
        </Container>
    );
}

export default DescriptionCourses;
