const express = require('express')
const app = express();
const crypto = require('crypto');

app.get('/', (req, res)=> {
// doWork(5000);
    crypto.pbkdf2('a', 'b', 200000, 512, 'sha512', ()=> {
        res.send('Hi')
    })
    
})

app.get('/fast', (req,res)=> {
    res.send('This was fast!')
})

app.listen(3000)

