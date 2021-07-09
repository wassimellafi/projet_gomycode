import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import Editcategories from "../editcategories/Editcategories";
import Addcategories from "../addcategories/Addcategories";
import { category } from "../../../Redux/actions/question";
import { Link } from "react-router-dom";
import "./Categories.css";
function Categories(props) {
    //  console.log(props.match.params.id)

    return (
        <div>
            {/* <Addcategories /> */}
            <Link to={"/questions/put/" + props.categories._id}>
                <Table striped bordered hover variant="dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Question</th>
                            <th scope="col">Difficulty</th>
                            <th scope="col">Incorrect_answers</th>
                            <th scope="col">Correct_answer</th>
                            <th scope="col">category</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Number(props.index) + 1}</td>
                            <td>{props.categories.question}</td>
                            <td>{props.categories.difficulty}</td>
                            <td>{props.categories.incorrect_answers}</td>
                            <td>{props.categories.correct_answer}</td>
                            <td>{props.categories.category}</td>
                            <td>
                                <Button variant="info">Edit</Button>
                            </td>
                            <td>
                                <Button variant="info">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Link>
            <Addcategories
                edit_categories={props.categories}
                key={props.index}
                index={props.index}
            />
        </div>
    );
}

export default Categories;
