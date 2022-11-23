import DB from "@database/db"

const AvoDetail = async (req, res) => {
    const db = new DB()
    const avoId = req.query.id
    const oneEntry = await db.getById(avoId)

    res.status(200).json(oneEntry)
}

export default AvoDetail