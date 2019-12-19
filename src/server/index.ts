import express from 'express';

const app = express();

app.get('/', function (_req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
