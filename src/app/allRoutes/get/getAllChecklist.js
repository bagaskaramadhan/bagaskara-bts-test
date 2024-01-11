const checklistTable = require("../../../entities/checklistEntity")
module.exports.GetAllChecklist = (req, res, { }) => {
    try {
        checklistTable.findAll()
            .then((result) => {
                return res.status(200).send(result)
            })
            .catch((err) => {
                return res.status(400).send({ message: err.message })
            })
        
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }
}