const express = require("express");
const {
    getById,
    getAll,
    Create,
    Delete,
} = require("../controllers/quiz.controllers");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
public
*/
router.post("/create", Create);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/
router.get("/", getAll);
router.get("/:id", getById);
router.delete("/delete/:id", Delete);

// default export
module.exports = router;
