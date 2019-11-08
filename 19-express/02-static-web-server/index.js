
const express = require('express');
const app = express();

app.use(express.static('.'));//中间件

app.listen(8080);
