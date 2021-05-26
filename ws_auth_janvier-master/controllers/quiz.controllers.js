const Quiz = require("../models/Quiz");

exports.Create = async (req, res) => {
    try {
        const { title, author } = req.body;

        const newQuiz = new Quiz({ ...req.body });

        await newQuiz.save();

        res.status(200).send({ msg: "register succ", quiz: newQuiz });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "newQuiz not saved" }] });
    }
};

exports.getById = async (req, res) => {
    try {
        const findquiz = await Quiz.findById(req.params["id"]);
        // ken mech mawjoud
        // bad credential
        if (!findquiz) {
            return res
                .status(403)
                .send({ errors: [{ msg: "quiz not found" }] });
        }

        res.status(200).send({
            findquiz,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "erreur" }] });
    }
};
exports.getAll = async (req, res) => {
    try {
        const findquiz = await Quiz.find();
        if (!findquiz) {
            return res
                .status(403)
                .send({ errors: [{ msg: "quiz not found" }] });
        }

        res.status(200).send({
            findquiz,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "erreur" }] });
    }
};
