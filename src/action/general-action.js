import axios from "axios";


export const signUpUser = async (name, email, password, phone) => {
  return await axios
    .post(`http://localhost:8000/register`, {
      name: name,
      email: email,
      password: password,
      phone: phone,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const loginUser = async (email, password) => {
  return await axios
    .post(`http://localhost:8000/loginuser`, {
      email: email,
      password: password,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const validateUser = async (email) => {
  return await axios
    .post(`http://localhost:8000/validate`, {
      email: email,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const getHotels = async (location) => {
  return await axios
    .post(`http://localhost:8000/gethotels`, {
      location: location,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const getUser = async (email) => {
  return await axios
    .post(`http://localhost:8000/getuser`, {
      email: email,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};


export const postBooking = async (booking) => {
  return await axios
    .post(`http://localhost:8000/bookingdetails`, {
      hotel_id: booking.hotel_id,
      user_id: booking.user_id,
      arrival_location: booking.arrival_location,
      departure_location: booking.departure_location,
      arrival_date: booking.arival_date,
      departure_date: booking.departure_date,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};


export const getBookings = async (user_id) => {
  return await axios
    .post(`http://localhost:8000/getBookings`, {
      user_id: user_id,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};


export const deleteBooking = async (hotel_id,user_id) => {
  return await axios
    .post(`http://localhost:8000/deleteBooking`, {
      hotel_id:hotel_id,
      user_id:user_id
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};
