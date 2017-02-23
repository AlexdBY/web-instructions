const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./routes/api');

const rsc = require('./i18n');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client/dist')));

app.use('/api', api);
app.use('/i18n',rsc);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));