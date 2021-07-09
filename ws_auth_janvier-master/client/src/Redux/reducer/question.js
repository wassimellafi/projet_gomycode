// import types

const {
    REGISTER_QUESTION,
    FAIL_QUESTION,
    QUESTION_USER,
    LOGIN_USER,
    CATEGORY_QUESTION,
    CURRENT_USER,
    LOAD_USER,
    UPDATE_QUESTION,
    GET_CATEGORY,
} = require("../constants/question");

// initialstate
const initialState = {
    question: {},
    category: {},
    errors: [],
    listchoix: {},
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
        case GET_CATEGORY:
            return {
                ...state,
                listchoix: payload.findcategory,
                isAuth: true,
            };
        case UPDATE_QUESTION:
            return state.question.map((state) => {
                if (state._id === payload._id) {
                    return {
                        ...state,
                        ...payload,
                    };
                } else {
                    return state;
                }
            });
        case REGISTER_QUESTION:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                question: payload.findquestion,
                load: false,
                isAuth: true,
            };
        case CATEGORY_QUESTION:
            return {
                ...state,
                category: payload.findquiz,
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
