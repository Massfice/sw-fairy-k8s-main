const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const dist = path.join(__dirname, '..', 'dist');

app.use('/', express.static(dist));

const daprPort = process.env.DAPR_PORT || 3500;
app.use(
    createProxyMiddleware({
        target: 'http://localhost:3000',
        router: { '/v1.0/invoke': `http://localhost:${daprPort}` },
        ws: true,
    }),
);

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
