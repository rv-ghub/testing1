const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Bhej raha hu");
});

app.listen("https://testing-psi-five.vercel.app/",function(){
    console.log("Sun raha hu na !");    
})