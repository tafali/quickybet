require('dotenv').config()

const auth = async (req, res, next) => {

    if(req.session.loggedin){
        next()
        return
    }

    const authheader = req.headers.authorization;
 
    if (!authheader || authheader.indexOf('Basic ') === -1) {
        res.setHeader('WWW-Authenticate', 'Basic realm=Authorization Required');
	    res.sendStatus(401)
        return
    }
 
    const [clientid, secret] = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');

    if (clientid === process.env.SUNAME && secret === process.env.SUPASS) {
        next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic realm=Authorization Required');
	    res.sendStatus(401)
        return
    }
}

module.exports = {
	auth
}
