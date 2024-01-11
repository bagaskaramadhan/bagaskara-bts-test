const userTable = require("../../../entities/usersEntity");
const jwt = require("jsonwebtoken");
const { tokenKey } = require("../../../lib/config");
// const doctorTable = require("../../../entities/doctorEntity")
module.exports.PostLogin = async (req, res, { }) => {
    try {
        const data = {
            username: req.body.username,
            password: req.body.password,
        }
        const checkDataRole = await userTable.findOne({ where: { username: data?.username, password: data.password } });
        if (!checkDataRole) {
            return res.status(404).send({ message: "wrong username/password" })
        }
        const access_token = jwt.sign({
            username: data.username,
        }, tokenKey,
            { expiresIn: '5m' });

        res.status(200).send({ access_token });
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }
}