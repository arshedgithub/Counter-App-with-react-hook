import React from "react";

const Counter = ({ counter, onIncrement, onSubstitution, onDelete, index }) => {
  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "zero" : value;
  };

  const getBadgeClass = () => {
    let badgeClass = "badge bg-";
    badgeClass += counter.value === 0 ? "warning fs-6" : "primary fs-5";
    return badgeClass;
  };

  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-1 mx-2'>
          <span className={getBadgeClass()}>{formatCount(counter.value)}</span>
        </div>
        <div className='col'>
          <button
            className='btn btn-secondary mx-1'
            onClick={() => onIncrement(counter, index)}
          >
            +
          </button>
          <button
            className='btn btn-secondary mx-2'
            onClick={() => onSubstitution(counter, index)}
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className='btn btn-danger'
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
