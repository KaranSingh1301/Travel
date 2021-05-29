import React, { Fragment, useState } from "react";
import Banner from "./Banner";
import DashboardCard from "./DashboardCard";
import { useFormik } from "formik";
import "./Dashboard.css";
import SearchResult from "../../results/SearchResult";
import { getHotels } from "../../../action/general-action";
import { useToasts } from "react-toast-notifications";

function Dashboard() {
  const [results, setResults] = useState([]);
  const { addToast } = useToasts();
  const validate = (values) => {
    const errors = {};
    if (!values.checkIn) {
      errors.checkIn = "*";
    } else if (values.checkOut < values.checkIn) {
      errors.checkIn = "!";
    }

    if (!values.checkOut) {
      errors.checkOut = "*";
    } else if (values.checkOut < values.checkIn) {
      errors.checkOut = "!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      checkIn: "",
      checkOut: "",
      numberOfPeople: 1,
      numberOfKids: 0,
      location: "new delhi",
    },
    validate,
    onSubmit: (values) => {
      getHotels(values.location)
        .then((res) => {
          if (res) {
            addToast("Hotels previewed are shown below!", {
              appearance: "success",
            });
            setResults(res);
          }
        })
        .catch((err) => {
          addToast(err.response.data.message, {
            appearance: "warning",
          });
        });
    },
  });

  return (
    <div className="dashboard">
      <div className="dashboard__form">
        <form className="dashboard__formInput" onSubmit={formik.handleSubmit}>
          <div className="dashboard__formInputTop">
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Location</div>
              <input
                className="dashboard__line2 big"
                type="text"
                name="location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              ></input>
            </div>
            {formik.touched.location && formik.errors.location ? (
              <div className="dashboard__formInput--error">
                {formik.errors.location}
              </div>
            ) : null}
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Check In</div>
              <input
                className="dashboard__line2 big"
                type="date"
                name="checkIn"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkIn}
              ></input>
            </div>
            {formik.touched.checkIn && formik.errors.checkIn ? (
              <div className="dashboard__formInput--error">
                {formik.errors.checkIn}
              </div>
            ) : null}
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Check Out</div>
              <input
                className="dashboard__line2 big"
                type="date"
                name="checkOut"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkOut}
              ></input>
            </div>
            {formik.touched.checkOut && formik.errors.checkOut ? (
              <div className="dashboard__formInput--error">
                {formik.errors.checkOut}
              </div>
            ) : null}
          </div>
          <div className="dashboard__formInputBottom">
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Adults</div>
              <input
                className="dashboard__line2 small"
                type="number"
                min={1}
                defaultValue={1}
                placeholder={1}
                name="numberOfPeople"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numberOfPeople}
              ></input>
            </div>
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Kids</div>
              <input
                className="dashboard__line2 small"
                type="number"
                min={0}
                placeholder={0}
                name="numberOfKids"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numberOfKids}
              ></input>
            </div>
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text "></div>
              <button className="dashboard__button" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <Banner />
      {results.length === 0 && (
        <Fragment>
          <div className="dashboard__section">
            <DashboardCard
              src="https://a0.muscache.com/im/pictures/d1858d9e-be18-4c50-bbbf-8b19d6ef8edc.jpg?im_w=720"
              title="Online Experiences"
              description="Unique activities we can do together, led by a world of hosts."
            />
            <DashboardCard
              src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
              title="Unique stays"
              description="Spaces that are more than just a place to sleep."
            />
            <DashboardCard
              src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."
            />
          </div>
          <div className="dashboard__section">
            <DashboardCard
              src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
              title="3 Bedroom Flat in Bournemouth"
              description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
              price="Rs 2300/night"
            />
            <DashboardCard
              src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
              title="Penthouse in London"
              description="Enjoy the amazing sights of delhi with this stunning penthouse"
              price="Rs 3500/night"
            />
            <DashboardCard
              src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="1 Bedroom apartment"
              description="Superhost with great amenities and a fabolous shopping complex nearby"
              price="Rs 2700/night"
            />
          </div>
        </Fragment>
      )}
      {results.length > 0 && (
        <Fragment>
          {results.map((result, i) => (
            <SearchResult
              key={result.id}
              img={`images/hotel`+i+`.jpg`}
              hotelID={result.id}
              location={result.location}
              title={result.name}
              description={result.ameneties}
              from={formik.values.checkIn}
              to={formik.values.checkOut}
              star={result.rating}
              price={result.price}
            />
          ))}
        </Fragment>
      )}
    </div>
  );
}

export default Dashboard;
