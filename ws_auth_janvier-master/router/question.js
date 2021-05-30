const express = require("express");
const {
    Create,
    getAll,
    getById,
    getByCat,
    Update,
    Delete,
} = require("../controllers/question.controllers");
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
router.get("/filter/:category/:difficulty", getByCat);
router.put("/put/:id", Update);
router.delete("/delete/:id", Delete);

// default export
module.exports = router;
