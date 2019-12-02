const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('success mongoDB');
}).catch(err => {
  console.log(err);
});

const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), function() {
  console.log(`starting in port ${server.address().port}`);
});

