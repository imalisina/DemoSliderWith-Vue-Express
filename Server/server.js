const express = require('express');
const connectDB = require('./config/db');


connectDB();
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/games' , require('./routes/apiRoutes'));

const ServerPort = process.env.PORT || 5000; 
app.listen(ServerPort, () => console.log(`Server Running On Port ${ServerPort}`));