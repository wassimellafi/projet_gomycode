const Question = require("../models/Question");
// create one quiz question
exports.Create = async (req, res) => {
    try {
        const { description } = req.body;
        const { image } = req.body;
        const { alternatives } = req.body;
        const { author } = req.body;
        const newQuestion = new Question({ ...req.body });
        await newQuestion.save();
        res.status(200).send({ msg: "register succ", question: newQuestion });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "newQuestion not saved" }] });
    }
};
// update one quiz question
exports.Update = async (req, res) => {
    try {
        const _id = req.params.id;
        const { description, image, alternatives, author } = req.body;

        let question = await Question.findOne({ _id });

        if (!question) {
            const newQuestion = new Question({ ...req.body });
            await newQuestion.save();
            return res.status(201).json(question);
        } else {
            question.description = description;
            question.alternatives = alternatives;
            question.image = image;
            question.author = author;
            await question.save();
            return res.status(200).json(question);
        }
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
exports.getByCat = async (req, res) => {
    try {
        const findcategory = await Question.find({
            category: req.params["category"],
            difficulty: req.params["difficulty"],
        });
        // ken mech mawjoud
        // bad credential
        if (!findcategory) {
            return res
                .status(403)
                .send({ errors: [{ msg: "category not found" }] });
        }

        res.status(200).send({
            findcategory,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "erreur" }] });
    }
};
exports.getById = async (req, res) => {
    try {
        const findquestion = await Question.findById(req.params["id"]);
        // ken mech mawjoud
        // bad credential
        if (!findquestion) {
            return res
                .status(403)
                .send({ errors: [{ msg: "question not found" }] });
        }

        res.status(200).send({
            findquestion,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "erreur" }] });
    }
};
exports.getAll = async (req, res) => {
    try {
        const findquestion = await Question.find();
        if (!findquestion) {
            return res
                .status(403)
                .send({ errors: [{ msg: "question not found" }] });
        }

        res.status(200).send({
            findquestion,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "erreur" }] });
    }
};
// delete one quiz question
exports.Delete = async (req, res) => {
    try {
        const _id = req.params.id;

        const question = await Question.deleteOne({ _id });

        if (question.deletedCount === 0) {
            return res.status(404).json();
        } else {
            return res.status(204).json();
        }
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};
