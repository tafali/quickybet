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
    const opts = req.body.opts

    if(!name) {
        res.json({status: 'ERROR', message: 'name is required'})
        return
    }
    if(!content) {
        res.json({status: 'ERROR', message: 'content is required'})
        return
    }
    if(!endtime) {
        res.json({status: 'ERROR', message: 'endtime is required'})
        return
    }
    if(!opts) {
        res.json({status: 'ERROR', message: 'opts is required'})
        return
    }
    if(!Array.isArray(opts)){
        res.json({status: 'ERROR', message: 'opts must be an array'})
        return
    }

    for (let i = 0; i < opts.length; i++) {
        if(!Object.hasOwn(opts[i], 'content')){
            res.json({status: 'ERROR', message: 'opts must have content'})
            return
        }
        if(!Object.hasOwn(opts[i], 'address')){
            res.json({status: 'ERROR', message: 'opts must have address'})
            return
        }
    }

	let bet = await db.Bet.create({
        name,
        content,
        endtime: new Date(endtime)
    })

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