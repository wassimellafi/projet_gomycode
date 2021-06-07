import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
const Profile = () => {
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div class="z-depth-5 main">
            <div class="row">
                <div class="col-sm-6 picture">
                    <center>
                        <img
                            class="circle responsive-img"
                            src={user && user.pic}
                        />
                        <span>
                            <a class="btn-floating pulse waves-effect waves-light add">
                                <i class="material-icons">add</i>
                            </a>
                        </span>
                    </center>
                </div>
                <div class="col-sm-6 details">
                    <center>
                        <p class="name">
                            <b>{user && user.name}</b>{" "}
                        </p>
                    </center>
                    <center>
                        <p>{user && user.email}</p>
                    </center>
                    <center>
                        <p>{user && user.phone}</p>
                    </center>
                </div>
            </div>
            <table class="table">
                <tr>
                    <td>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                    </td>
                </tr>
            </table>
            <center>
                <a class="waves-effect waves-light btn edit">Edit Profile</a>
            </center>
        </div>
    );
};

export default Profile;
