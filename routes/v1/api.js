const router = require('express').Router()
const apiController = require("../../controllers/v1/api.controller")
const betController = require("../../controllers/v1/bet.controller")
const payController = require("../../controllers/v1/pay.controller")
const {auth} = require("../../auth")

router.get('/test', apiController.getTest)

router.get('/bet', betController.activebet)
router.get('/bets', betController.list)
router.post('/bets', auth, betController.add)
router.put('/bets/deactive/:id', auth, betController.deactive)
router.put('/bets/active/:id', auth, betController.active)
router.get('/payments/:address', payController.getByAddress)

router.get('*', (_req, res) => {
    res.json({status: 'ERROR', message: 'invalid request'})
})

module.exports = router