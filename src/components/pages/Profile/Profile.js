import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import axios from "../../../axios";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SearchResult from "../../results/SearchResult";
import {getUser} from "../../../action/general-action"
import { TravelContext } from "../../../context"
function Profile() {
  const [bookingResults, setBookingResults] = useState([]);
    //context
    const { TOKEN, Auth} = useContext(TravelContext);
    //AUTH
    const [token] = TOKEN;

    // useEffect(() => {
     
    //   async function fetchData() {
    //     console.log(token);
    //     const request = await axios.get("http://localhost:8000/getuser", {
    //       email:token
    //     });
    //     console.log(request);
    //   }
    //   fetchData();
    // }, []);


// const email = token;
//   useEffect(() => {

//     getUser(email)
//     .then(() =>{
      
//       console.log(email);
      
//     }).catch(err =>{
      
//     })
//     return ;
//   }, []);

// const getUserData = ()=>{
  
// }

// function getUserData(){
//   console.log("clicked")
//   // const email = token;
//   // console.log(email);
//    let email = Auth();
//   email =JSON.stringify(email)
//   console.log(email);
//   getUser(email)
//   .then(res=>{

//     console.log(res);
//   })

// }


  return (
    <div className="profile">
      <div className="profile_head">
        <img src="/images/img-7.jpg" className="profile__headImage" alt="" />
        <div className="profile_headData">
          <h2 className="f-shead">DummyUser</h2>
          <div className="profile__info f-text">
            <EmailIcon />
            <p>dummymail@gmail.com</p>
          </div>
          <div className="profile__info f-text">
            <PhoneIcon /> <p>9876543210</p>
          </div>
          <div>
            <button>
              click me
            </button>
          </div>
        </div>
      </div>
      <div className="profile__book">
        <div className="profile__bookings">
          <h1>BOOKINGS</h1>
          <div className="profile__results">
            {bookingResults.map((result) => (
              <SearchResult />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
