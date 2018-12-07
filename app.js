const express = require('express')
const app = express()
require('dotenv').load()
app.set('veiw engine','pug')

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) =>{
    res.render('main.pug')
        
    



})

app.get('/maps', (req, res) =>{
    res.render('maps.pug',{
        title: 'map',
        heading:'Express',
        key: process.env.KEY
    })



})

app.get('/url', (req, res) =>{
    res.render('url_shortener.pug',{
        title: 'Url Shortener',
        heading:'Express',
        key: process.env.KEY
    })



})

app.get('/youtube', (req, res) =>{
    res.render('youtube.pug',{
        title: 'youtube',
        heading:'Express',
        key: process.env.KEY
    })



})


app.listen(8080)