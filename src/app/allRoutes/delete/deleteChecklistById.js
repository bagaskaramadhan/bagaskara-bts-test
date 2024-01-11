const checklistTable = require("../../../entities/checklistEntity")
module.exports.DeleteChecklistByID = async (req, res, { }) => {
    try {
        const id = req.params.checklistId
        const checklistById = await checklistTable.findOne({ where: { id } });
        const results = checklistById.dataValues
        if (results) {
            checklistTable.destroy({
                where: { id }
            })
        }
        return res.status(200).send({ message: "Checklist has been deleted" })
        // if (checklistById === null) {
        //     return "OK"
        // }
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }
}