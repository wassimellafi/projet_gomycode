// import types

const {
    REGISTER_QUESTION,
    FAIL_QUESTION,
    QUESTION_USER,
    LOGIN_USER,
} = require("../constants/question");

// initialstate
const initialState = {
    question: {},
    errors: [],
    isAuth: false,
};

// pure function=> (state, {type,payload})=>
const questionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER_QUESTION:
            localStorage.setItem("token", payload.token);
            return { ...state, question: payload.question };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case FAIL_QUESTION:
            return { ...state, errors: payload };
        case QUESTION_USER:
            return { ...state, question: payload.question, isAuth: true };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };
        default:
            return state;
    }
};

export default questionReducer;
