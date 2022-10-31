const express = require('express')
const cors = require('cors')

const app = express()

app.get('/', () => {
    console.log("Welcome to routes...!) 
})

app.get('/error', () => {
    res.status(404).send("Page not found!!!")
})   
    
app.get('/pages', () => {
    res.send({
        status: 200,
        message: "Success!!!"
  })
})     

app.use(cors())
    
app.listen(3000, () => {
  console.log("Server listening on 3000")
})
