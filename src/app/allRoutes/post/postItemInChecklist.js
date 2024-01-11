const itemsTable = require("../../../entities/itemsEntity")
module.exports.PostItemInChecklist = async (req, res, { }) => {
    try {
        const id = req.params.checklistId
        const checklistById = await itemsTable.findOne({ where: { checklistId: id } });
        if (!checklistById) {
            return res.status(400).send({ message: "id not found" })
        }
        const data = {
            itemName: req.body.itemName,
            checklistId: id
        }
        if (!data.itemName) {
            return res.status(400).send({ message: "field cannot be empty" })
        }
        await itemsTable.create(data)
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