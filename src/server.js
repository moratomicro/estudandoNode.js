import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('<h1><u>Hello World!</u></h1>'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
