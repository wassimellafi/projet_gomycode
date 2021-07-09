import axios from "axios";
import {
    FAIL_QUESTION,
    QUESTION_USER,
    CATEGORY_QUESTION,
    CURRENT_USER,
    LOGIN_USER,
    LOAD_USER,
    UPDATE_QUESTION,
    REGISTER_QUESTION,
    GET_CATEGORY,
} from "../constants/question";

export const allquestion = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        let result = await axios.get("/api/questions", config);
        let category = await axios.get("/api/quiz", config);
        let curr = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: curr.data }); //{msg , user}
        dispatch({ type: QUESTION_USER, payload: result.data }); //{msg , user}
        dispatch({ type: CATEGORY_QUESTION, payload: category.data });
    } catch (error) {
        dispatch({ type: FAIL_QUESTION, payload: error.response.data });
    }
};
export const allcategory = () => async (dispatch) => {
    try {
        let category = await axios.get("/api/quiz");
        dispatch({ type: CATEGORY_QUESTION, payload: category.data });
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

export const updateQuestions = (id, question, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.put(`/api/questions/put/${id}`, question);
        console.log("up", result.data);
        dispatch({ type: UPDATE_QUESTION, payload: result.data });
        history.push("/dashbord");
    } catch (error) {
        dispatch({ type: FAIL_QUESTION, payload: error.response.data });
    }
};
export const registerquestion = (question, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/questions/create", question);
        console.log("register", result.data);
        //succees action
        dispatch({ type: REGISTER_QUESTION, payload: result.data }); //{user,token,msg}
        history.push("/dashbord");
    } catch (error) {
        // fail
        dispatch({ type: FAIL_QUESTION, payload: error.response.data.errors });
    }
};
export const getQuestionsCat =
    (category = "") =>
    async (dispatch) => {
        dispatch({ type: LOAD_USER });
        try {
            let result = await axios.get(`/api/questions/filter/${category}`);
            dispatch({ type: GET_CATEGORY, payload: result.data });
        } catch (error) {
            // fail
            dispatch({
                type: FAIL_QUESTION,
                payload: error.response.data.errors,
            });
        }
    };
