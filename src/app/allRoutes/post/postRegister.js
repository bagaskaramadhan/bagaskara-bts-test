const usersTable = require("../../../entities/usersEntity")
module.exports.PostRegister = async (req, res, { }) => {
    try {
        const data = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }
        if (!data.username || !data.email || !data.password) {
            return res.status(400).send({ message: "field cannot be empty" })
        }
        await usersTable.create(data);
        return res.status(200).send({ message: "Success created" })
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }
}