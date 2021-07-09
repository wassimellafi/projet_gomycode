import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateQuestions } from "../../../Redux/actions/question";
import { useSelector, useDispatch } from "react-redux";
import { allquestion } from "../../../Redux/actions/question";
import "./Editcategories.css";
function Editcategories(props) {
    const [show, setShow] = useState(false);
    const [editdifficulty, setEditDifficulty] = useState("");
    const [editquestion, setEditQuestion] = useState();
    console.log("editquestion", editquestion);
    const questions = useSelector((state) => state.questionReducer);
    const question = questions.question.find(
        (id) => id._id === props.match.params.id
    );
    useEffect(() => {
        dispatch(allquestion());
    }, []);

    const handleClose = () => {
        setShow(false);
    };

    const handleChange = (e) => {
        setEditQuestion({ ...editquestion, [e.target.name]: e.target.value });
    };
    const handleShow = () => {
        setShow(true);
    };
    const dispatch = useDispatch();
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(updateQuestions(props.match.params.id, editquestion));
        handleClose();
    };

    return (
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="col-lg-6">
                <form onSubmit={(e) => handleRegister(e)}>
                    <div class="row px-3">
                        {" "}
                        <label class="mb-1">
                            <h6 class="mb-0 text-sm">question</h6>
                        </label>{" "}
                        <input
                            class="mb-4"
                            type="text"
                            name="question"
                            placeholder="Edit your question..."
                            onChange={handleChange}
                            value={question.question}
                        />{" "}
                    </div>
                    <div class="row px-3">
                        {" "}
                        <label class="mb-1">
                            <h6 class="mb-0 text-sm">difficulty</h6>
                        </label>{" "}
                        <input
                            class="mb-4"
                            name="difficulty"
                            placeholder="difficulty"
                            value={question.difficulty}
                            onChange={handleChange}
                        />{" "}
                    </div>

                    <div class="row px-3">
                        {" "}
                        <label class="mb-1">
                            <h6 class="mb-0 text-sm">correct_answer</h6>
                        </label>{" "}
                        <input
                            name="correct_answer"
                            placeholder="correct_answer"
                            value={question.correct_answer}
                            onChange={handleChange}
                        />{" "}
                    </div>
                    <div class="row px-3">
                        {" "}
                        <label class="mb-1">
                            <h6 class="mb-0 text-sm">incorrect_answers</h6>
                        </label>{" "}
                        <input
                            class="mb-4"
                            name="incorrect_answers"
                            placeholder="enter your incorrect_answers"
                            value={question.incorrect_answers}
                            onChange={handleChange}
                        />{" "}
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="custom-control custom-checkbox custom-control-inline">
                            {" "}
                        </div>{" "}
                    </div>
                    <div class="row mb-3 px-3">
                        {" "}
                        <button
                            type="submit"
                            class="btn btn-blue text-center"
                            onClick={handleRegister}
                        >
                            Save
                        </button>{" "}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Editcategories;
