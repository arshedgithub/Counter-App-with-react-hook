import React from "react";

const Counter = ({ counter, onIncrement, onSubstitution }) => {
  return (
    <div className="container">
      <div className="row m-3">
        <div className="col-1">
          <span className="badge bg-primary fs-5">{counter.value}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary mx-1"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => onSubstitution(counter)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
