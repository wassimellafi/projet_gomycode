import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateQuestions } from "../../../Redux/actions/question";
import { useSelector, useDispatch } from "react-redux";
function Editcategories({ edit_categories, index }) {
    console.log("edittt", edit_categories);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState({});
    const handleClose = () => {
        setShow(false);
    };
    const handleChange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value });
    };
    const handleShow = () => {
        setShow(true);
    };
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(
            updateQuestions({
                id: edit_categories._id,
                question: edit_categories,
            })
        );
        handleClose();
    };

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Categories </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        id="question"
                        placeholder="Edit your question..."
                        onChange={(e) => handleChange(e.target.value)}
                        value={edit_categories.question}
                        name="question"
                    />
                    <Form.Control
                        type="text"
                        id="difficulty"
                        placeholder="Edit your Difficulty question..."
                        onChange={(e) => handleChange(e.target.value)}
                        value={edit_categories.difficulty}
                        name="difficulty"
                    />
                    <Form.Control
                        type="text"
                        id="incorrect_answers"
                        placeholder="Edit your Difficulty Incorrect_answers..."
                        onChange={(e) => handleChange(e.target.value)}
                        value={edit_categories.incorrect_answers}
                        name="incorrect_answers"
                    />
                    <Form.Control
                        type="text"
                        id="correct_answer"
                        placeholder="Edit your Difficulty Correct_answer..."
                        onChange={(e) => handleChange(e.target.value)}
                        value={edit_categories.correct_answer}
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

export default Editcategories;
