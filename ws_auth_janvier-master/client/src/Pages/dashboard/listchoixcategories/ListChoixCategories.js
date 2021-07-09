import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../../Components/ErrorMessage/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import { allquestion } from "../../../Redux/actions/question";
import { getQuestionsCat } from "../../../Redux/actions/question";
import "./ListChoixCategories.css";
function ListChoixCategories() {
    const [category, setCategory] = useState("");
    const [list, setList] = useState("");

    const [error, setError] = useState(false);
    const history = useHistory();
    const result = useSelector((state) => state.questionReducer.category);
    console.log("result", result);
    console.log("list", list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allquestion());
    }, []);

    const handleSubmit = () => {
        if (!category) {
            setError(true);
            return;
        } else {
            setError(false);
            dispatch(getQuestionsCat(category));
            history.push("/dashbord");
        }
    };
    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>
                <div className="settings__select">
                    {error && (
                        <ErrorMessage>Please Fill all the feilds</ErrorMessage>
                    )}
                    <TextField
                        select
                        label="Select Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        {result.map((cat) => (
                            <MenuItem key={cat._id} value={cat._id}>
                                {cat.title}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        List Questions
                    </Button>
                </div>
            </div>
            <img src="/quiz.svg" className="banner" alt="quiz app" />
        </div>
    );
}

export default ListChoixCategories;
