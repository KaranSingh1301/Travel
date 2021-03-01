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