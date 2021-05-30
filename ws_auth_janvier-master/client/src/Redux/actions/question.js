import axios from "axios";
import { FAIL_QUESTION, QUESTION_USER } from "../constants/question";

export const question = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/questions", config);
        console.log("result", result);
        dispatch({ type: QUESTION_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_QUESTION, payload: error.response.data });
    }
};
