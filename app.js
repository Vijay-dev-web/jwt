const express = require('express')
const cors = require('cors')

const app = express()

app.get('/', () => {
    console.log("Welcome to routes...!) 
})

app.use(cors())
    
app.listen(3000, () => {
  console.log("Server listening on 3000")
})
