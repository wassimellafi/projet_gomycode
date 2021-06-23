import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import Editcategories from "../editcategories/Editcategories";
import Addcategories from "../addcategories/Addcategories";
import { category } from "../../../Redux/actions/question";
function Categories({ categories, index }) {
    return (
        <div>
            {/* <Addcategories /> */}
            <Table striped bordered hover variant="dark">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Question</th>
                        <th scope="col">Difficulty</th>
                        <th scope="col">Incorrect_answers</th>
                        <th scope="col">Correct_answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Number(index) + 1}</td>
                        <td>{categories.question}</td>
                        <td>{categories.difficulty}</td>
                        <td>{categories.incorrect_answers}</td>
                        <td>{categories.correct_answer}</td>
                    </tr>
                </tbody>
            </Table>

            <Editcategories
                edit_categories={categories}
                key={index}
                index={index}
            />
            <Addcategories
                edit_categories={categories}
                key={index}
                index={index}
            />
        </div>
    );
}

export default Categories;
