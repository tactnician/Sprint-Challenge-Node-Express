const express = require('express');

server = express();

server.use(express.json());

server.get('/', (req,res) => 
    res.send(`
        <div style="background-image: url('https://i.redd.it/lwwt86ci5anz.jpg'); background-size: cover; height: 700px; ">
            <h2 style="color:white;"> Portal </h2>
        </div>
    `)
)


module.exports = server; 