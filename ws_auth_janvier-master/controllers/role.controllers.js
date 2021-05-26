const Role = require("../models/Role");
exports.Create = async (req, res) => {
    try {
        const { name } = req.body;

        const newRole = new Role({ ...req.body });

        await newRole.save();

        res.status(200).send({ msg: "register succ", role: newRole });
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: [{ msg: "newRole not saved" }] });
    }
};

exports.getById = async (req, res) => {
    try {
        const findrole = await Role.findById(req.params["id"]);
        // ken mech mawjoud
        // bad credential
        if (!findrole) {
            return res
                .status(403)
                .send({ errors: [{ msg: "role not found" }] });
        }

        res.status(200).send({
            findrole,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "erreur" }] });
    }
};
exports.getAll = async (req, res) => {
    try {
        const findrole = await Role.find();
        if (!findrole) {
            return res
                .status(403)
                .send({ errors: [{ msg: "role not found" }] });
        }

        res.status(200).send({
            findrole,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "erreur" }] });
    }
};
