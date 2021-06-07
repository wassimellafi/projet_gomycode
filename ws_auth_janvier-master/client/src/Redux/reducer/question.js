// import types

const {
    REGISTER_QUESTION,
    FAIL_QUESTION,
    QUESTION_USER,
    LOGIN_USER,
    CATEGORY_QUESTION,
} = require("../constants/question");

// initialstate
const initialState = {
    question: {},
    category: {},
    errors: [],
    isAuth: false,
    load: false,
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
                category: payload.category,
                isAuth: true,
            };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };
        default:
            return state;
    }
};

export default questionReducer;
