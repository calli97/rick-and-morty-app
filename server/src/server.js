const express = require('express');
const router = require('./routes');
const app = express();
const cors=require('cors')
const morgan=require('morgan')
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))

app.use('/',router)
app.use('/favorites',require('./routes/favorites'))
app.use('/characters',require('./routes/characters'))

app.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});