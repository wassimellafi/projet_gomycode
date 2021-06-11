import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { allquestion } from "../../Redux/actions/question";
import "./Landpage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const LandPage = () => {
    return (
        <div className="landpage">
            <div className="cover">
                <h1>welcome from the test</h1>
                <form className="flex-form"></form>
            </div>
        </div>
    );
};

export default LandPage;
