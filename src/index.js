const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/index');


//Configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//midlewares

//routes
app.use(indexRoute);

//static files

app.use(express.static(path.join(__dirname, 'public')));

// Escuchando el servidor
app.listen(app.set('port'), () => {
    console.log('Server on port', app.set('port'));
});