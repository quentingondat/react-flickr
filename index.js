const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
