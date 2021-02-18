import React from 'react';
import { Link } from "react-router-dom";

const ButtonGroup = (props) => {
  console.log("ButtonGroup", props.genres);
  return (
    <div className="btn-group"
      role="group"
      aria-label="Basic outlined example">
      {props.genres.map((g) => (
      <button key={g} type="button"
          className={
            props.selectGenre ===
              g ? "btn btn-outline-primary active" : "btn btn-outline-primary"
          }
          onClick={() => props.Click(g)}
          aria-current="true">
          {g}
       </button>
      ))}

    </div>
  );
}
export default ButtonGroup;