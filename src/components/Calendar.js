import React from "react";
import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <Link to="/editor">
      <button className="calendar_add">+</button>
    </Link>
  );
};

export default Calendar;
