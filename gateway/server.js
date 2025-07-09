require('dotenv').config();
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

const authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://auth:5000/';

app.use('/auth', proxy(authServiceUrl, {
  proxyReqPathResolver: function(req) {
    return req.originalUrl.replace(/^\/auth/, '') || '/';
  }
}));

app.get('/', (req, res) => {
  res.send('API Gateway is running on port 3000');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway démarrée sur le port ${PORT}`);
});
