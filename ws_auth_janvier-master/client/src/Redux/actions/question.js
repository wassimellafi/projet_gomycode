import axios from "axios";
import {
    FAIL_QUESTION,
    QUESTION_USER,
    CATEGORY_QUESTION,
    CURRENT_USER,
    LOGIN_USER,
    LOAD_USER,
} from "../constants/question";

export const allquestion = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        let result = await axios.get("/api/questions", config);

        let curr = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: curr.data }); //{msg , user}
        dispatch({ type: QUESTION_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_QUESTION, payload: error.response.data });
    }
};
export const category = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/quiz", config);
        console.log("category", result);
        dispatch({ type: CATEGORY_QUESTION, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_QUESTION, payload: error.response.data });
    }
};
