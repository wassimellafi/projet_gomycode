import "./App.css";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Login from "./Pages/Login/Login";
import Courses from "./Pages/Courses/Courses";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landpage} />
                <Route path="/register" component={Register} />
                <Route path="/courses" component={Courses} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/*" component={Errors} />
            </Switch>
        </div>
    );
}

export default App;
