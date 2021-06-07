import axios from "axios";
import {
    FAIL_QUESTION,
    QUESTION_USER,
    CATEGORY_QUESTION,
} from "../constants/question";

export const allquestion = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/questions", config);
        console.log("questionsactions", result.data);
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
        let result = await axios.get(
            "/api/questions/filter/60b23530a9030f26047add6f/easy",
            config
        );
        console.log("category", result);
        dispatch({ type: CATEGORY_QUESTION, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_QUESTION, payload: error.response.data });
    }
};
