// import express into our file
const express = require('express')

// create a new express application
const app = express()

// define the port our server will run on
const port = 3000


// allow statoc assets in public folder
app.use(express.static('public')


)
// define our server routes

app.get('/', ( req, res )=>{
    res.send("Server running functionally!")
})

app.get('/test', ( req, res )=>{
    // do something when the server processes this request

    // send back a response to the client
    res.send("Server is operational")
})




// run our server to listen at the port we defined
app.listen(port, ()=>{
    console.log('Server is running on port ${port}')
})