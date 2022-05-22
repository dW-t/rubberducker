import express from 'express';
const app = express();

const resJson = require('./json/sample.json');

// 画像はURLを渡して、表示させる
app.use(express.static('public'));

app.get('/contents', (req: express.Request, res: express.Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Jsonデータは小文字はじまりが多いです
  res.json(resJson);
});

app.listen(5000);
