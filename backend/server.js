const express= require('express');
const bodyParser = require('body-parser');
const app=express();
const path =require('path');

const api = require('./routes/api');

//Body parser middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '10mb'}));

// app.use(express.static(path.join(__dirname,'build')));
app.use(express.static("/home/ahlem/Desktop/argon/argon-dashboard-react/build/"));
app.use('/api', api);

app.get('*',(req,res)=>{
    // res.sendFile(path.join(__dirname,'build','index.html'))
    res.sendFile(path.join("/home/ahlem/Desktop/argon/argon-dashboard-react/build/",'index.html'))
});

app.listen (3000,()=> console.log('localhost 3000'));