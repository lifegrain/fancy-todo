const express = require('express')
const app = express()
const port = 3000

const router = require(`./routes`)
const errorHandling = require(`./errorHandler/errorHandler`)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.use(errorHandling)

app.listen(port, () => console.log(`listening on port ${port}!`))