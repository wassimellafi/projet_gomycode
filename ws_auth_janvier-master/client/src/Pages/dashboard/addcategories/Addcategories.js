import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerquestion } from "../../../Redux/actions/question";
import "./Addcategories.css";
function Addcategories({ history, edit_categories }) {
    const [show, setShow] = useState(false);
    const [question, setQuestion] = useState("");
    const category = useSelector((state) => state.questionReducer.category);
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
                        onChange={handleChange}
                        variant="outlined"
                        name="difficulty"
                        style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="facile">
                            facile
                        </MenuItem>
                    </TextField>
                    <TextField
                        select
                        label="Select Category"
                        onChange={handleChange}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        name="category"
                    >
                        {category.map((cat) => (
                            <MenuItem key={cat._id} value={cat._id}>
                                {cat.title}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Form.Control
                        type="text"
                        placeholder="Incorrect_answers..."
                        onChange={handleChange}
                        name="incorrect_answers"
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
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Addcategories;
