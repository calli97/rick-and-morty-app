const express = require('express');
const router = require('./routes');
const app = express();
const PORT = 3001;

app.use(express.json())

app.use('/',router)

app.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});