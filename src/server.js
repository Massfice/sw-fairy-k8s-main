const express = require('express');
const path = require('path');

const app = express();
const dist = path.join(__dirname, '..', 'dist');

app.use('/', express.static(dist));

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
