const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  //res.send({ message: 'Hello World!' });
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(3333, () => {
  console.log('Application listining on port 3333!');
});
