import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerquestion } from "../../../Redux/actions/question";
import "./Addcategories.css";
function Addcategories({ history, edit_categories }) {
    const [show, setShow] = useState(false);
    const [difficulty, setDifficulty] = useState("");
    const [question, setQuestion] = useState("");
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };
    const handleChange = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(registerquestion(question, history));
        handleClose();
    };
    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Question </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="ADD your question..."
                        onChange={handleChange}
                        name="question"
                    />
                    <TextField
                        select
                        label="Select Difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            facile
                        </MenuItem>
                    </TextField>
                    <Form.Control
                        type="text"
                        placeholder="Incorrect_answers..."
                        onChange={handleChange}
                        name="Incorrect_answers"
                    />
                    <Form.Control
                        type="text"
                        placeholder="Correct_answer..."
                        onChange={handleChange}
                        name="correct_answer"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Addcategories;
