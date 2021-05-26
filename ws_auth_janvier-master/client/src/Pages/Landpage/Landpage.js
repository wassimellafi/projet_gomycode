import React from "react";
import "./Landpage.css";
const LandPage = () => {
    return (
        <div className="landpage">
            <div className="cover">
                <h1>welcome from the test</h1>
                <form className="flex-form">
                    <label htmlFor="from">
                        <i className="ion-location" />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default LandPage;
