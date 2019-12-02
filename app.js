const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('flash');
const router = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
// app.use(flash());

// pass variables to our templates + all requests
/*app.use((req, res, next) => {
  res.locals.flashes = req.flash();
  next();
}); */

app.use('/', router);

module.exports = app;
