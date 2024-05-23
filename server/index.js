// import express into our file
const express = require('express')

// create a new express application
const app = express()

// define the port our server will run
const port = 3000

// allow static assets in public folder
app.use(express.static('public'))

const root = require('path').join(__dirname, '../client', 'dist')
app.use(express.static(root))

// define our server routes
app.get('/', (req, res)=>{
    res.sendFile('index.html', {root})
})

app.get('/test', (req, res) => {
    res.send('Server is operational');
  });

// run our server to listen at the port we defined
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})