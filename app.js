const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()
const db = require('./models')

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(session({
	secret: 'quiCKyBet',
	resave: true,
	saveUninitialized: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', function(request, response) {
    if (request.session.loggedin) {
        response.sendFile(path.join(__dirname, 'view', 'home.html'));
    } else {
        response.sendFile(path.join(__dirname, 'view', 'index.html'));
    }
})

app.get('/logout', function(request, response) {
    delete request.session.loggedin
    delete request.session.account
    response.redirect('/');
})

app.get('/myaccount', function(request, response) {
    if(request.session.loggedin)
        response.json(request.session.account)
    else
        response.json({})
})

app.post('/login', async function(request, response) {
	let email = request.body.email;
	let passwd = request.body.passwd;

	if (email && passwd) {
		const acc = await db.Account.findOne({
            where : {
                email
            }
        })

        console.log(acc)
        console.table(acc)
        if(acc === null){
		    response.redirect('/');
        } else if(acc.password !== passwd) {
		    response.redirect('/');
        } else {
            request.session.loggedin = true;
            request.session.account = acc;
            response.redirect('/');
        }
	} else {
		response.redirect('/');
	}
})

app.use('/api/v1', require('./routes/v1/api'))

app.use(express.static(path.join(__dirname, 'static')))

module.exports = app
