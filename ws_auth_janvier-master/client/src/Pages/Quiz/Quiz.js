import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../Components/Question/Question";
import "./Quiz.css";
import { useSelector } from "react-redux";
const Quiz = ({ questions, score, setScore, setQuestions }) => {
    const user = useSelector((state) => state.userReducer.user);
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        setOptions(
            questions &&
                handleShuffle([
                    questions.findcategory[currQues]?.correct_answer,
                    ...questions.findcategory[currQues]?.incorrect_answers,
                ])
        );
    }, [currQues, questions]);

    console.log("questionspagequiz", questions);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="quiz">
            <span className="subtitle">Welcome, {user && user.name}</span>

            {questions ? (
                <>
                    <div className="quizInfo">
                        <span></span>
                        {/* {questions.findcategory[currQues].category} */}
                        <span>
                            {/* {questions[currQues].difficulty} */}
                            Score : {score}
                        </span>
                    </div>
                    <Question
                        currQues={currQues}
                        setCurrQues={setCurrQues}
                        questions={questions}
                        options={options}
                        correct={
                            questions.findcategory[currQues]?.correct_answer
                        }
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                    />
                </>
            ) : (
                <CircularProgress
                    style={{ margin: 100 }}
                    color="inherit"
                    size={150}
                    thickness={1}
                />
            )}
        </div>
    );
};

export default Quiz;
