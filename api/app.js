
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var cors = require('cors');
const port = 1234;


app.use(cors());
app.use(fileUpload());


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.json({a:'test passed'}));
app.post('/upload',async(req, res)=>{

    console.log(req.files.file);
    console.log(req.body);

    res.json({status:"success"});

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))