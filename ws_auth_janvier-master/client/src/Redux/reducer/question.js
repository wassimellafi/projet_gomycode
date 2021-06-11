// import types

const {
    REGISTER_QUESTION,
    FAIL_QUESTION,
    QUESTION_USER,
    LOGIN_USER,
    CATEGORY_QUESTION,
    CURRENT_USER,
    LOAD_USER,
} = require("../constants/question");

// initialstate
const initialState = {
    question: {},
    category: {},
    errors: [],
    isAuth: false,
    load: false,
    user: {},
};

// pure function=> (state, {type,payload})=>
const questionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case QUESTION_USER:
            return {
                ...state,
                question: payload.findquestion,
                isAuth: true,
            };
        case CATEGORY_QUESTION:
            return {
                ...state,
                category: payload.findquiz,
                isAuth: true,
            };
        case LOAD_USER:
            return { ...state, load: true };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };
        default:
            return state;
    }
};

export default questionReducer;
