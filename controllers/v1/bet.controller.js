const db = require('../../models')
const bet = require('../../models/bet')

const list = async (_req, res) => {	
    const pays = await db.Bet.findAll()

    return res.json(pays)
}

const activebet = async (_req, res) => {
	const bet = await db.Bet.findOne({
        where:{
            status: 0
            //TODO: endtime: new Date
        }
    })

    if(!bet){
        return res.json(null)
    }

    const opts = await db.Option.findAll({
        where:{
            betid: bet.id
        }
    })

	res.json({...bet.dataValues, opts})
}

const add = async (req, res) => {
    const name = req.body.name
    const content = req.body.content
    const endtime = req.body.endtime

    // TODO : name is not null
    // TODO : content is not null
    // TODO : endtime is not null
    // TODO : opts is not null


	let bet = await db.Bet.create({
        name,
        content,
        endtime: new Date(endtime)
    })

    const opts = req.body.opts

    opts.forEach(async (element, ind) => {
        await db.Option.create({
            betid: bet.id,
            ind,
            content: element.content,
            address: element.address
        })
    });

    res.json({status: 'SUCCESS', message: 'bet created'})
}

const deactive = async (req, res) => {
    const bet = await db.Bet.findByPk(req.params.id)

    if(bet) {
		bet.status = -1
        await bet.save()
		res.json({status: 'SUCCESS', message: 'bet deactivated'})
	} else {
		res.json({status: 'ERROR', message: 'bet not found'})
		return
	}
}

const active = async (req, res) => {
    const bet = await db.Bet.findByPk(req.params.id)

    if(bet) {
		bet.status = 0
        await bet.save()
		res.json({status: 'SUCCESS', message: 'bet activated'})
	} else {
		res.json({status: 'ERROR', message: 'bet not found'})
		return
	}
}

module.exports = {
    list,
    activebet,
    add,
    deactive,
    active
}