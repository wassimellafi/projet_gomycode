import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { allcategory } from "../../Redux/actions/question";
import Courses from "../Courses/courses";
import "./Landpage.css";

const LandPage = () => {
    const category = useSelector((state) => state.questionReducer.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allcategory());
    }, []);
    console.log("question", category);
    return (
        <div className="landpage">
            <div>
                <h1>welcome from the test</h1>
                {/* <Row>
                    {category.map((movie, key) => {
                        return (
                            <Col key={movie._id}>
                                <Courses movie={movie} />
                            </Col>
                        );
                    })}
                </Row> */}
            </div>
        </div>
    );
};

export default LandPage;
