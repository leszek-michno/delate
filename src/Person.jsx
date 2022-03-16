import React from "react";

const Person = (props) => {
  return (
    <>
      <li>
        <span>
          {props.name}
        </span>
        <button onClick={props.delete}> X </button>
      </li>
      <hr />
    </>
  );
};

export default Person;
