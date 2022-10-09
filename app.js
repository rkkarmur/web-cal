// import express
const express = require('express');
const {calculator} = require('./function')

//server 
const app = express();

//enj package fro html page view
app.set('view engine', 'ejs');

app.get('/',function(req,res) {
    // res.sendfile(__dirname + '/index.ejs');
    res.render('index');
 
});

app.get('/ans/',function(req,res) {

    // get data from html from  save parameters
    data=req.query;

    console.log(data); //check data

    ans = calculator(data);

    console.log(ans);

    var output= `${data.num1} ${data.op} ${data.num2} = ${ans} `;

    res.render('ans',{data:{op:output}});
    
});

const port = process.env.PORT || 3000
app.listen(port,(req,res) => {
    console.log(`App listening at http://localhost:${port}`);
});
