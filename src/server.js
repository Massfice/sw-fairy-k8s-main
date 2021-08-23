const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const app = express();
const dist = path.join(__dirname, '..', 'dist');

app.use('/', express.static(dist));

const daprPort = process.env.DAPR_PORT || 3500;

const proxy = httpProxy.createProxyServer();

app.all('/v1.0/invoke/*', (req, res) => {
    return proxy.web(req, res, { target: `http://localhost:${daprPort}` });
});

app.use('*', express.static(`${dist}/index.html`));

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
