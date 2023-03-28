const express = require('express')
const connectDb = require('./config/dbconnection')
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv').config()
const contact = require('./routes/contactRoutes')
const user = require('./routes/userRoutes')

connectDb()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/contacts', contact)
app.use('/api/users', user)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})