import React, { useState } from "react";
import "./DatePicker.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

// DATE PICKER COMPONENT
function DatePicker() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const values = {
    startDate: startDate,
    endDate: endDate,
    numberOfPeople: numberOfPeople,
  };
  return (
    <div className="datePicker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input
        min={1}
        value={numberOfPeople}
        onChange={(e) => setNumberOfPeople(Number(e.target.value))}
        type="number"
        name="numberOfPeople"
      />
      <Button onClick={() => console.log(values)}>Search Travigo</Button>
    </div>
  );
}

export default DatePicker;
