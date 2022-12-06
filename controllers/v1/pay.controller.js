const db = require('../../models')
const bet = require('../../models/bet')

const getByAddress = async (req, res) => {
	const pays = await db.Payment.findAll({
        where:{
            address: req.params.address
        }
    })

    return res.json(pays)
}

module.exports = {
    getByAddress
}