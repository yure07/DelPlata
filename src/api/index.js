const express = require ('express')
const morgan = require('morgan')
const mercadopago = require('mercadopago')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use((_req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Acccept, Authorization"
    )
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})


mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY})
server.post('/payment', (req, res)=>{
    const prod = req.body
    let preference = {
        items: [{
            id: 123,
            title: prod.title,
            currency_id: "ARS",
            picture_url: prod.image,
            description: prod.overview,
            category_id: 'art',
            quantity: 1,
            unit_price: parseFloat(prod.priceNow)
        }],
        back_urls: {
            success: "http://localhost:3000",
            failure: '',
            pending: ''
        },
        auto_return: 'approved',
        binary_mode: true
    }
    mercadopago.preferences.create(preference)
    .then((response)=>{
        res.status(200).send({response})
    })
    .catch((error)=>{
        res.status(400).send(`erro aí ` + error)
    })
})


server.listen(3001, ()=>{
    console.log("Server is running on port: 3001")
})