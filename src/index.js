const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Arithmetic Service - Last Updated Februrary 15 2024');
});
app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.param.n);
    let m = Number(req.param.m);
    let sum = add(n, m);
      res.json(sum);
    });

app.listen(port);
