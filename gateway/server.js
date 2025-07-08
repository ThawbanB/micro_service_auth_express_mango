require('dotenv').config();
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

app.use('/', proxy('http://localhost:5000/auth'));

app.get('/', (req, res) => {
  res.send('API Gateway is running on port 3000');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway démarrée sur le port ${PORT}`);
});
