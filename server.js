const express = require('express');
const app = express();

//Send json message
app.get('/', (req,res)=>{
    res.send({"Message":"Hello World"})
});


app.listen(8000);