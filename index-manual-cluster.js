// We are going to create 2 child here in cluster mode
process.env.UV_THREADPOOL_SIZE = 1; // Set pool size of theadpool to 1 here (default is 4). So this application is running in single thread mode
const express = require('express')
const app = express();
const crypto = require('crypto');
const cluster = require('cluster')

// Is the file being run in master mode?
if (cluster.isMaster) {
    // Cause index.js to be execute again but in child mode
    cluster.fork(); // Create a child
    cluster.fork();

    // cluster.fork();
    // cluster.fork();
}
else {    
    app.get('/', (req, res)=> {
        crypto.pbkdf2('a', 'b', 200000, 512, 'sha512', ()=> { // Run some time consuming taksk .ie crypto
            // console.log('1: ', Date.now() - start);
            res.send('Hi') // After execution done, return some message
        })
        
    })

    app.get('/fast', (req,res)=> { // This 'fast' api is for the purpose of showing that when server is busy with other task and threadpool size is 1, any
                                   // response that's normally supposed to be quick, is delayed by the foregoing time consuming request
        res.send('This was fast!')
    })

    app.listen(3000)

}
