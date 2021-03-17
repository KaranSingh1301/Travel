import axios from "axios";


export const signUpUser = async (name, email, password, phone) => {
  return await axios
    .post(`../../backend/register`, {
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
    .post(`../../backend/loginuser`, {
      email: email,
      password: password,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const validateUser = async (email) => {
  return await axios
    .post(`../../backend/validate`, {
      email: email,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const getHotels = async (location) => {
  return await axios
    .post(`../../backend/gethotels`, {
      location: location,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};

export const getUser = async (email) => {
  return await axios
    .post(`../../backend/getuser`, {
      email: email,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};


export const postBooking = async (booking) => {
  return await axios
    .post(`../../backend/bookingdetails`, {
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
    .post(`../../backend/getBookings`, {
      user_id: user_id,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};


export const deleteBooking = async (hotel_id,user_id) => {
  return await axios
    .post(`../../backend/deleteBooking`, {
      hotel_id:hotel_id,
      user_id:user_id
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
};
