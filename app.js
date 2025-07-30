const express = require('express');
const app = express();
app.get('/', (_, res) => res.send("App running 🚀"));
app.listen(3000);
