const express = require('express')

const app = express()

app.get('/', () => {
    console.log("Welcome to routes...!) 
})

app.listen(3000, () => {
  console.log("Server listening on 3000")
})
