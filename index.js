const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send("Bhej raha hu");
});

app.listen("https://testing-psi-five.vercel.app/",function(){
    console.log("Sun raha hu na !");    
})

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Testing</h1>
</body>
</html>
