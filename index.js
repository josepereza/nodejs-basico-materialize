const express = require('express');
const app = express();
const path = require('path');
const indexRoute= require('./routes/index');
//settings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.use(indexRoute);
//app.use(require('./routes/indes'))

//middlewares


//static files

app.use(express.static('public'));

app.listen(app.get('port'), ()=> {
    console.log('escuchando en el puerto 3000');

});

