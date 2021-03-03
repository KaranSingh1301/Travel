const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const Bcrypt = require("bcrypt");

const BCRYPT_SALT_ROUNDS = 12;


//App Config
const app = express();
const port = process.env.PORT || 8000

//middleware
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());


//Db config
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Karan@130101',
    database: "traveldb",
    multipleStatements : true
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected!");
  });



//routes  
app.get('/', (req, res) => res.status(200).send("hello"));


app.post('/register', (req, res)=>{
    const newUser = req.body;
    Bcrypt.hash(newUser.password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
      db.query("INSERT INTO users (name, email, password,phone) VALUES (?,?,?,?)", [newUser.name, newUser.email, hashedPassword, newUser.phone],
    (err, user)=>{
      if(err){
        console.log(err);
        return res.status(400);
      }else{
        return res
        .status(200)
        .send(true); 
        
      }
    }
    )
    })
}
)

app.post('/loginuser', (req, res)=>{
  const loginUser = req.body;

  
  db.query("SELECT * FROM users WHERE email = ?",
  [loginUser.email],
  (err, user)=>{
    if(err){
      console.log(err);
      return res.status(404).send({err:err})
    }

      if(user.length>0){
        console.log(user);
        return res
        .status(200)
        .send({message: "Login successfull"})
        
      }
      else {
        return res
        .status(404)
        .send({message: "Username/password do not match."});
      }
    }
  
  )

})





//Listener
app.listen(port, function(){
    console.log(`listening on localHost: ${port}`);
})