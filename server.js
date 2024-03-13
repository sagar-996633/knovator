require('dotenv').config()
const http = require('http')
const express = require('express')
const  routes  = require('./routes')
const bodyParser = require('body-parser')
const dbConnect = require('./db/dbConnect')
const cookieParser = require('cookie-parser')
const app = express()


//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cookieParser())

//ejs view template
app.set('view engine','ejs')

//routes
app.use('/v1',routes)


//routes
app.get('/',(req,res,next)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('./login')
})

app.get('/register',(req,res)=>{
    res.render('./register')
})




//db
dbConnect()

//server
http.createServer(app).listen(process.env.PORT,()=>{
    console.log("server started");
})