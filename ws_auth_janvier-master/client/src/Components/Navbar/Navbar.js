import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <header>
            <h2>
                <i className="icon-plane" />
                <Link to="/">Authentification</Link>
            </h2>
            <nav>
                <ul>
                    <ul className="ul_auth">
                        {isAuth ? (
                            <>
                                <Link to="/">
                                    {" "}
                                    <ul
                                        className="auth"
                                        onClick={() => dispatch(logout())}
                                    >
                                        LOGOUT{" "}
                                    </ul>
                                </Link>
                                <Link to="/start">
                                    {" "}
                                    <ul>START-QUIZ </ul>
                                </Link>
                            </>
                        ) : (
                            <>
                                <ul>
                                    {" "}
                                    <Link to="/register">
                                        {" "}
                                        <li className="auth">Register </li>
                                    </Link>
                                </ul>
                                <ul>
                                    <Link to="/login">
                                        {" "}
                                        <li className="auth">LogIn </li>
                                    </Link>
                                </ul>
                            </>
                        )}
                    </ul>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
