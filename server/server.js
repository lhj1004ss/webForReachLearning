const path = require('path');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const scheduleRouter = require('./routes/schedule');

require("dotenv").config({path: path.join(__dirname, '../.env')});

const app = express();
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use("/schedule", scheduleRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).json({
    result: 'error',
    error: err.message
  })
});

app.listen(PORT, ()=>{
  const sequelize = require('./models').sequelize;
  sequelize.sync().then(() => console.log(`Server and DB are successfully started on ${PORT}`))
  .catch(err => console.log(`Unable to sync DB: ${err}`))
  
});