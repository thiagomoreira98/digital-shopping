const express = require('express');
const fs = require('fs');
const compression = require('compression');
const app = express();
const port = 4000;
let filesPath = require('path').join(__dirname, '/dist/digital-shopping-web');

app.use(compression());
app.use(express.static(filesPath));

app.set('views', filesPath);

app.get('/*', (req, res) => {
    fs.readFile(`${filesPath}/index.html`, 'utf8', (err, text) => {
        res.send(text);
    });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});