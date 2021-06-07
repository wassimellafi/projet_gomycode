import "./App.css";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Login from "./Pages/Login/Login";
import CoursesList from "./Pages/Courseslist/CoursesList";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
import { allquestion } from "./Redux/actions/question";
import { category } from "./Redux/actions/question";
import DescriptionCourses from "./Pages/DescriptionCourses/DescriptionCourses";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import axios from "axios";
import { useSelector } from "react-redux";
function App() {
    const [questions, setQuestions] = useState();
    const [allquestions, setAllquestions] = useState();
    const [name, setName] = useState();
    const [score, setScore] = useState(0);
    const [data, setData] = useState({});
    const question = useSelector((state) => state.questionReducer.question);
    console.log("coursesapp", question);
    const fetchQuestions = async (category = "", difficulty = "") => {
        //  const { data } = await axios.get(
        //         `/api/questions/filter/${category}/${difficulty}`
        //     );
        const { data } = await axios.get(
            `/api/questions/filter/60b23530a9030f26047add6f/easy`
        );
        setQuestions(data);
        console.log("questionsApp", questions);
    };
    const allquestion = () => async (dispatch) => {
        let result = await axios.get("/api/questions");
        setAllquestions(result.data.findquestion);
    };
    console.log("all", allquestions);
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "blackList",
            description: "HE TOLD YOU NOT TO TRUST HIM.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",

            rate: 1,
            trailerfilm: "https://www.youtube.com/watch?v=-WYdUaK54fU",
        },

        {
            id: 2,
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            rate: 5,
            trailerfilm: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
        },
        {
            id: 3,
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            rate: 2,
            trailerfilm: "https://www.youtube.com/watch?v=6hB3S9bIaco",
        },

        {
            id: 4,
            title: "The Godfather",
            description:
                "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
            rate: 4,
            trailerfilm: "https://www.youtube.com/watch?v=sY1S34973zA",
        },
        {
            id: 5,
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rate: 4,
            trailerfilm: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        },
        {
            id: 6,
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            rate: 3,
            trailerfilm: " https://www.youtube.com/watch?v=iWh0pONVnjc",
        },
        {
            id: 7,
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",

            rate: 4,
            trailerfilm: "https://www.youtube.com/watch?v=mxphAlJID9U",
        },
        {
            id: 8,
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",

            rate: 2,
            trailerfilm: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
        },
        {
            id: 9,
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            rate: 3,
            trailerfilm: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
        },
    ]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
        dispatch(allquestion());
        dispatch(category());
    }, []);
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Landpage
                        questions={questions}
                        allquestions={allquestions}
                    />
                </Route>
                <Route path="/register" component={Register} />
                <Route
                    path="/courses"
                    render={(props) => (
                        <CoursesList
                            {...props}
                            allquestions={allquestions}
                            courses={courses}
                        />
                    )}
                />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route
                    path="/course/:id"
                    render={(props) => (
                        <DescriptionCourses
                            {...props}
                            allquestions={allquestions}
                            courses={courses}
                        />
                    )}
                />
                <Route path="/start" exact>
                    <Home
                        questions={questions}
                        name={name}
                        setName={setName}
                        fetchQuestions={fetchQuestions}
                        setQuestions={setQuestions}
                        allquestions={allquestions}
                    />
                </Route>
                <Route path="/quiz">
                    <Quiz
                        name={name}
                        questions={questions}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                    />
                </Route>

                <Route path="/result">
                    <Result name={name} score={score} />
                </Route>
                <Route path="/*" component={Errors} />
            </Switch>
        </div>
    );
}

export default App;
