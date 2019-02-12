const express = require('express')
const app = express()
const port = 8080
app.use(express.static(`${__dirname}/public`))
app.listen(port,err=>err?err:console.log(`server is up on ${port}`))
