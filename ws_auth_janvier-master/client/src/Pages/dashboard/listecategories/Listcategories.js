import React, { useEffect } from "react";
import Categories from "../categories/Categories";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { allquestion } from "../../../Redux/actions/question";
import { category } from "../../../Redux/actions/question";
import MaterialTable from "material-table";
function Listcategories() {
    const question = useSelector((state) => state.questionReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allquestion());
        dispatch(category());
    }, []);

    return (
        <div className="listTask">
            {/* {question.question.map((categories, index) => (
                <Categories categories={categories} key={index} index={index} />
            ))} */}
        </div>
    );
}

export default Listcategories;
