import React, { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { allquestion } from "../../../Redux/actions/question";
import { category } from "../../../Redux/actions/question";
import { getQuestionsCat } from "../../../Redux/actions/question";
import MaterialTable from "material-table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Listcategories.css";
function Listcategories(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allquestion());
    }, []);
    const question = useSelector((state) => state.questionReducer.question);
    console.log("question", question);
    const cat = useSelector((state) => state.questionReducer.category);
    console.log("cat", cat);
    const listchoix = useSelector((state) => state.questionReducer.listchoix);
    console.log("listchoix", listchoix);

    return (
        <div className="listTask">
            {listchoix.map((categories, index) => (
                <Categories
                    categories={categories}
                    key={categories._id}
                    index={index}
                    cat={cat}
                />
            ))}
        </div>
    );
}

export default Listcategories;
