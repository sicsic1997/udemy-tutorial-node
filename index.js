const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Nope'});
})

const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT

app.listen(PORT);