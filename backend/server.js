const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');


//App Config
const app = express();
const port = process.env.PORT || 8000

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.status(200).send("hello"));

//Db config



//Listener
app.listen(port, function(){
    console.log(`listening on localHost: ${port}`);
})