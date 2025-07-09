require('dotenv').config();
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

// On garde toute l'URL d'origine sans la modifier
const authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://auth-service:5000';

app.use('/auth', proxy(authServiceUrl, {
  proxyReqPathResolver: (req) => req.originalUrl || '/',
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway démarrée sur le port ${PORT}`);
});
