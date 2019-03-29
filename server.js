const express = require('express');

const server = express();

server.use(express.json());

const projectRouter = require('./projects/projects-router');
const actionRouter = require('./actions/actions-router');


server.get('/', (req,res) => 
    res.send(`
        <div style="background-image: url('https://i.redd.it/lwwt86ci5anz.jpg'); background-size: cover; height: 700px; ">
            <h2 style="color:white;"> Portal </h2>
        </div>
    `)
)

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server; 