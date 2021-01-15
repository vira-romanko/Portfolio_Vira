const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views'));



//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/', require('./routes/index.js'));
//app.use(express.static('public'));


app.use((req, res, next) =>{
  var err = new Error('Not Found');
  err.status = 404;
  err.message = "Bonjour! Sorry, I'm still cooking. This page is not ready yet!"

  next(err);

})

app.use((err, req, res, next) =>{
  res.render('error', {error: err, layout:'errorPage'});
})

app.listen(port, ()=>{
  console.log(`app is runng on ${port}`);
})

