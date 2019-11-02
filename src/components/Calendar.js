import React from "react";
import { Link } from "react-router-dom";

const Calendar = props => {
  return (
    <div>
      <Link to="/editor">
        <button className="calendar_add">+</button>
      </Link>
      <div>
        <p>{props.moods}</p>
      </div>
    </div>
  );
};

export default Calendar;
