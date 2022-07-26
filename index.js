//const bodyParser = require('body-parser');
//const cors = require('cors');


const express=require('express')
const app=express()

const port=3000;

app.listen(port,()=>{
    console.log('Cisco BOOST 2.0 listening at http://localhost:',port)
});

// 2.a i define a GET api
app.get('/',function(req,res){
        res.send('CWiCS Assesment')
});

// 3 a i
app.get('/cc',function(req,res){
    //const get_json = req.body;
    //console.log(get_json);
    res.send('Post to this endpoint with JSON to convert to YAML');
    //res.json({"cc": "Boost2.0"});
});

app.post('/cc',function(req,res){
    axios.post('localhost:8080/count', {})
    axios.post('localhost:8081/convert', req.body).then(function (response) {res.send(response);
      })
});




