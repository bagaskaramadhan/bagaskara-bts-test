const checklistTable = require("../../../entities/checklistEntity")
module.exports.PostCreateChecklist = (req, res, { }) => {
    try {
        const data = {
            name: req.body.name,
        }
        if (!data.name) {
            return res.status(400).send({ message: "field cannot be empty" })
        }
        checklistTable.create(data)
            .then(() => {
                return res.status(200).send({ message: "Success created" })
            })
            .catch(err => {
                console.error(err.message)
            })
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }
}