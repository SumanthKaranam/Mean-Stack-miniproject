const express = require('express');
const app = express()

const api = require('./api');

const bodyParser = require('body-parser');
const cors = require('cors');
const connectdb=require('./db.js')
app.set('port', (process.env.PORT || 2000))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/api', api)
app.use(express.static('static'))


app.use(function (req, res) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})


connectdb()
app.listen(app.get('port'), function () {
    console.log('Api server listening to ' + app.get('port') + '!');
})