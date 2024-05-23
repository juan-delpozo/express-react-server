// import express into our file
const express = require('express')

// create a new express application
const app = express()

// define the port our server will run
const port = 3000

// define our server routes
app.get('/message', (req, res)=>{
    // do something when the server processes this request

    // send back a response to the client
    res.send("Hello from our server!")
})

// run our server to listen at the port we defined
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})