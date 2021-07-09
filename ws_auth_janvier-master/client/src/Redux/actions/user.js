import axios from "axios";
import {
    LOAD_USER,
    REGISTER_USER,
    FAIL_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
} from "../constants/user";

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", user);
        //succees action
        dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}
        history.push("/profile");
    } catch (error) {
        // fail
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
        if (result.data.user.role === "etudiant") {
            history.push("./profile");
        } else if (result.data.user.role === "formateur") {
            history.push("./listchoix");
        } else {
            history.push("./");
        }
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

// logout
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
export const updateProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        const { data } = await axios.post("/api/user", user, config);

        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

        dispatch({ type: LOGIN_USER, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
