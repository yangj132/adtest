const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

app.get('/', (req,res)=>{
    res.status(200).send('Default route is operational for the backend service')
    }
);

const userRoutes = require('./src/routes/userRoutes');
app.use('/users', userRoutes)
app.listen(5000)