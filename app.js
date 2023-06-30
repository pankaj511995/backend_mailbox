import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {connect} from 'mongoose'
import allMailDetails from './Router/Mail.js'
import {config} from 'dotenv'
config()
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use('/mail',allMailDetails)


connect(process.env.MONGODB_URL).then(()=>{
    console.log('connected')
    app.listen(process.env.PORT)
}).catch(err=>console.log(err,'not connected '))
 