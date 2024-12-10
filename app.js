const express = require('express');
const path = require('path');
const app = express();

const PORT = 4000;

const homepage_path = path.join(__dirname,"./index.html");

app.get('/',(req,res) => {
    res.status(200).sendFile(homepage_path);
});






app.listen(4000,() => {
    console.log(`Server is listening on ${PORT}`);
});