const express = require('express');
const { get } = require('mongoose');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');  //creo q aca meteria lo de react!!!!!!
app.set('views', path.join(__dirname, 'views'))




app.get('/', (req, res) => {
    res.render('home')
})








app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})