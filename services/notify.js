const fs = require("fs");
const {Console} = console;
const wcommand = require('./walletCommands')
const db = require('../models')
const { Op } = require("sequelize");

const bnotify = (coin, hash) => {
	const output = fs.createWriteStream('./stdout.log');
	const logger = new Console(output);

	logger.log(coin + ' --> ' + hash)
	// wcommand.getInfo(coin, async (err, info) => {
	// 	logger.log(coin + ' --> ' + JSON.stringify(info))
	// 	//logger.log(coin + ' .--> ' + JSON.stringify(info.result.blocks))

	// 	if(info && info.result && info.result.blocks) {
	// 		db.Order.findAll({
	// 			/*
	// 			logging: (sql, queryObject) => {
	// 				logger.log(sql)
	// 			},
	// 			*/
	// 			where : {
	// 				blockid: {
	// 					[Op.gt]: 0
	// 				},
	// 				address: {
	// 					[Op.not]: null
	// 				},
	// 				confirmation: {
	// 					[Op.lt]: 6
	// 				}
	// 			}
	// 		})
	// 		.then(ords => {
	// 			logger.log(JSON.stringify(ords, null, 2))

	// 			ords.forEach((ord) => {
	// 				ord.confirmation = info.result.blocks - ord.blockid
	// 				ord.save()

	// 				if(ord.confirmation >= 6){
	// 					//whConfirmed(ord.id, logger)
	// 				}
	// 			})
	// 		})
	// 		.catch(e => {
	// 			logger.log(e)
	// 		})
	// 	}
	// })
}

const wnotify = (coin, txid) => {
	const output = fs.createWriteStream('./wstdout.log');
	const logger = new Console(output);

	logger.log(coin + ' --> ' + txid)
	wcommand.getTransaction(coin, txid, async (err, txi) => {
		logger.log(coin + ' --> ' + JSON.stringify(txi))
		logger.log(txi.result.blockhash)

		if(txi.result.blockhash) {
			wcommand.decodeRawTransaction(coin, txi.result.hex, async (err, dectx) => {
				
		        logger.log('dectx --> ' + JSON.stringify(dectx))

				txi.result.details.forEach( async det => {
					logger.log(det.address)
					logger.log(det.amount)

                    const opt = await db.Option.findOne({
						where : {
							address: det.address
						}
					})

					const pay = await db.Payment.create({
						betid: opt.betid,
                        optid: opt.id,
                        addressto: det.address,
                        addressfrom: dectx.result.vout[0].scriptPubKey.addresses[0],
                        txid: txid,
                        amount: det.amount
					})

				})
			})
		} // if
	})
}

module.exports = {
	bnotify,
	wnotify
}