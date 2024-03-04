const express = require("express")
const app = express()
const port = 8081
const bodyParser =require('body-parser')
const userRouter=require('./routing')

app.use(bodyParser.json())
app.use( '/users',userRouter)

app.listen(port, () => {
    console.log("app is runing!!")
})