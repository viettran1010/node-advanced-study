process.env.UV_THREADPOOL_SIZE = 1;
const express = require('express')
const app = express();
const crypto = require('crypto');
const cluster = require('cluster')

// Is the file being run in master mode?
if (cluster.isMaster) {
    // Cause index.js to be execute again but in child mode
    cluster.fork();
    cluster.fork();

    // cluster.fork();
    // cluster.fork();
}
else {
    // Im a child, I'm going to act like a server and do nothing else
    // const doWork = (duration)=> {
    //     const start = Date.now();

    //     while (Date.now()-start < duration) {

    //     }
    // }

    app.get('/', (req, res)=> {
        // doWork(5000);
        crypto.pbkdf2('a', 'b', 200000, 512, 'sha512', ()=> {
            // console.log('1: ', Date.now() - start);
            res.send('Hi')
        })
        
    })

    app.get('/fast', (req,res)=> {
        res.send('This was fast!')
    })

    app.listen(3000)

}
