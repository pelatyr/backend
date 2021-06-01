const express = require('./config/express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`istening on port ${port}`);
});