const itemsTable = require("../../../entities/itemsEntity")
module.exports.GetAllChecklistItemByChecklistId = async (req, res, { }) => {
    try {
        const id = req.params.checklistId
        const checklistById = await itemsTable.findOne({ where: { checklistId: id } });
        if (!checklistById) {
            return res.status(400).send({ message: "id not found" })
        }
        await itemsTable.findAll({
            where: {
                checklistId: id
            }
        })
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