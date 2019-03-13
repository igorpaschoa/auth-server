const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');
const config = require('./config');

const app = express();

mongoose.connect(config.db);

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on:', port);
