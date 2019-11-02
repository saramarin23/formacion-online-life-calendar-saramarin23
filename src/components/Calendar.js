import React from "react";
import { Link } from "react-router-dom";
import Smiley from "./Smiley";

const Calendar = props => {
  const { moods } = props;
  console.log(moods);
  return (
    <div>
      <Link to="/editor">
        <button className="calendar_add">+</button>
      </Link>
      <div>
        {/* <p>{props.moods.date}</p>
        <p>{props.moods.mood}</p>
        <p>{props.moods.message}</p> */}
        {/* <ul>
          {moods.map(day => {
            return <Smiley mood={day} />;
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default Calendar;
