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
// app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: "traveldb",
    multipleStatements : true
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected!");
  });


app.get('/', (req, res) => res.status(200).send("hello"));

app.post('/register', (req, res)=>{
    const newUser = req.body;
    db.query("INSERT INTO users (name, email, password,phone) VALUES (?,?,?,?)", [newUser.name, newUser.email, newUser.password, newUser.phone],
    (err, result)=>{
      if(err){
        console.log(err);
        return res.status(400);
      }else{
        console.log("success");
        
      }
    }
    )
    return res.status(200).send(true);  
})

//Db config



//Listener
app.listen(port, function(){
    console.log(`listening on localHost: ${port}`);
})
