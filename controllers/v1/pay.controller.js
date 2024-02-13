const db = require('../../models')
const bet = require('../../models/bet')

const getByAddress = async (req, res) => {
	const pays = await db.Payment.findAll({
        where:{
            addressto: req.params.address
        }
    })

    for (index = 0, length = pays.length; index < length; ++index) {
        pays[index].addressfrom = pays[index].addressfrom.replace(pays[index].addressfrom.substring(4,11), "*******")
    }

    return res.json(pays)
}

module.exports = {
    getByAddress
}