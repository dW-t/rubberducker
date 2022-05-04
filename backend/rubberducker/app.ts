import express from 'express';
const app = express();

const resJson = require('./json/sample.json');

const fs = require('fs');
resJson.BackGroundImage = fs.readFileSync('./img/sample-bg.jpg', {
  encoding: 'base64',
});

resJson.UserIcon = fs.readFileSync('./img/sample-icon.png', {
  encoding: 'base64',
});

app.get('/contents', (req: express.Request, res: express.Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(resJson);
});

app.listen(5000);
