import axios from 'axios';

export const signUpUser = async (name,email,password,phone)=>{
    return await axios
    .post(`http://localhost:8000/register`, {
        name: name,
        email: email,
        password:password,
        phone:phone
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
}

export const loginUser =async (email,password)=>{
    return await axios
    .post(`http://localhost:8000/loginuser`,{
        email:email,
        password:password
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));
}

export const validateUser = async (email) => {
    return await axios
      .post(`http://localhost:8000/validate`, {
        email: email
      })
      .then(res => res.data)
      .catch(err => Promise.reject(err));
  };

  export const getUser = async (email) =>{
      return await axios
      .get(`http://localhost:8000/getuser`,{
          email:email
      })
      .then(res => res.data)
      .catch(err => Promise.reject(err));
  }