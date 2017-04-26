const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const apiroutes = require('./app/routing/apiRoutes.js');
const htmlroutes = require('./app/routing/htmlRoutes.js');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'app','public')));
app.use(express.static(path.join(__dirname,'app','data')));
app.use(apiroutes, htmlroutes);

app.listen(port);


