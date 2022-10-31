const express = require('express')

const app = express()

app.get('/', () => {
    console.log("Welcome to routes...!) 
})

app.get('/error', () => {
    res.status(404).send("Page not found!!!")
})    
    
app.listen(3000, () => {
  console.log("Server listening on 3000")
})
