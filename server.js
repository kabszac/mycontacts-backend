const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv').config()
const contact = require('./routes/contactRoutes')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/contacts', contact)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})