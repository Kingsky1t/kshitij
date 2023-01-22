const route = require('express').Router();
const controller = require('../controller/index')
route.get('/register',(req,res)=> {
    res.render('register')
})
route.post('/register', controller.create)
route.get('/', (req,res)=>{
    res.render('index')
})
// route.post('/', controller.create)



module.exports = route