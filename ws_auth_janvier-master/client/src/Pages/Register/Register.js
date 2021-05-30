import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import "./Register.css";

const Register = ({ history }) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);

    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user, history));
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        return () => {
            dispatch(videErrors());
        };
    }, []);
    return (
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-6">
                        <div class="card1 pb-5">
                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img
                                    src="https://i.imgur.com/uNGdWHi.png"
                                    class="image"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="card2 card border-0 px-4 py-5">
                            <div class="row mb-4 px-3">
                                {errors.length > 0
                                    ? errors.map((el) => <Errors error={el} />)
                                    : null}
                                <h6 class="mb-0 mr-4 mt-2">Sign Up</h6>
                            </div>
                            <div class="row px-3 mb-4">
                                <div class="line"></div>{" "}
                                <div class="line"></div>
                            </div>
                            <form onSubmit={(e) => handleRegister(e)}>
                                <div class="row px-3">
                                    {" "}
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Name</h6>
                                    </label>{" "}
                                    <input
                                        class="mb-4"
                                        type="TEXT"
                                        id="inputNmae"
                                        name="name"
                                        placeholder="Name User "
                                        required
                                        autofocus
                                        onChange={handleChange}
                                    />{" "}
                                </div>
                                <div class="row px-3">
                                    {" "}
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">
                                            Email Address
                                        </h6>
                                    </label>{" "}
                                    <input
                                        class="mb-4"
                                        type="email"
                                        id="inputEmail"
                                        name="email"
                                        placeholder="email address"
                                        required
                                        autofocus
                                        onChange={handleChange}
                                    />{" "}
                                </div>
                                <div class="row px-3">
                                    {" "}
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Password</h6>
                                    </label>{" "}
                                    <input
                                        type="password"
                                        name="password"
                                        id="inputPassword"
                                        placeholder="Enter password"
                                        onChange={handleChange}
                                    />{" "}
                                </div>
                                <div class="row px-3">
                                    {" "}
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">
                                            Phone Number
                                        </h6>
                                    </label>{" "}
                                    <input
                                        class="mb-4"
                                        type="number"
                                        id="inputNmae"
                                        name="phone"
                                        placeholder="enter your phone number "
                                        required
                                        autofocus
                                        onChange={handleChange}
                                    />{" "}
                                </div>
                                <div class="row px-3 mb-4">
                                    <div class="custom-control custom-checkbox custom-control-inline">
                                        {" "}
                                    </div>{" "}
                                </div>
                                <div class="row mb-3 px-3">
                                    {" "}
                                    <button
                                        type="submit"
                                        class="btn btn-blue text-center"
                                        onClick={handleRegister}
                                    >
                                        Sing Up
                                    </button>{" "}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="bg-blue py-4">
                    <div class="row px-3">
                        {" "}
                        <small class="ml-4 ml-sm-5 mb-2">
                            Copyright &copy; 2021. All rights reserved.
                        </small>
                        <div class="social-contact ml-4 ml-sm-auto">
                            {" "}
                            <span class="fa fa-facebook mr-4 text-sm"></span>{" "}
                            <span class="fa fa-google-plus mr-4 text-sm"></span>{" "}
                            <span class="fa fa-linkedin mr-4 text-sm"></span>{" "}
                            <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
