import React from "react";
import Container from "react-bootstrap/Container";

function DescriptionCourses(props) {
    const course = props.courses.find(
        (course) => course.id === Number(props.match.params.id)
    );

    return (
        <Container>
            <h1>{course.title}</h1>
            <h5>{course.description}</h5>
        </Container>
    );
}

export default DescriptionCourses;
