// import types

const {
    REGISTER_USER,
    LOGIN_USER,
    FAIL_USER,
    LOAD_USER,
    CURRENT_USER,
    LOGOUT_USER,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} = require("../constants/user");

// initialstate
const initialState = {
    user: {},
    errors: [],
    isAuth: false,
    load: false,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        //   payload:{token , msg , user }
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        //   payload: {token , msg , user}
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case FAIL_USER:
            return { ...state, errors: payload, load: false };
        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };
        default:
            return state;
    }
};

export default userReducer;
export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, userInfo: action.payload, success: true };
        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload, success: false };
        default:
            return state;
    }
};
