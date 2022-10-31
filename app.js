const express = require('express')

const app = express()

app.get('/', () => {
    console.log("Welcome to routes...!) 
})

app.get('/home, () => {
    console.log("Welcome to home page")        
})    
   
app.listen(3000, () => {
  console.log("Server listening on 3000")
})
