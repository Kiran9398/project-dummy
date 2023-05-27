import React from "react";
import { Link } from "react-router-dom";

const Form = ({
  name,
  nameHandler,
  number,
  numberHandler,
  addHandler,
  updatedHandler,
  show,
}) => {
  return (
    <div>
      <form className="form-container">
        <input value={name} onChange={nameHandler} type="text" />
        <br />
        <input value={number} onChange={numberHandler} type="number" />
        <br />
        {!show ? (
          <Link to='/table'>
            <button onClick={addHandler}>Add</button>
          </Link>
        ) : (
          <button onClick={updatedHandler}>Update</button>
        )}
      </form>
    </div>
  );
};

export default Form;
