require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/auth', createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/auth': '' }, 
}));

app.get('/', (req, res) => {
    res.send('API Gateway is running 🚀');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API Gateway démarrée sur le port ${PORT}`);
});
