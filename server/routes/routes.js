const route = require('express').Router();
const controller = require('../controller/controller')
route.get('/', (req, res) => {
    res.render('index')
})
route.post('/', controller.create)

module.exports = route