import React, { useState, useEffect } from "react";

const Counter = ({ index, onDelete, setTotalCount, totalCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (totalCount === 0) {
      setCount(0);
    }
  }, [totalCount]);

  const onIncrement = () => {
    setCount(count + 1);
    setTotalCount(totalCount + 1);
  };

  const onSubstitution = () => {
    setCount(count - 1);
    setTotalCount(totalCount - 1);
  };

  const getBadgeClass = () => {
    let badgeClass = "badge bg-";
    badgeClass += count === 0 ? "warning fs-6" : "primary fs-5";
    return badgeClass;
  };

  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-1 mx-2'>
          <span className={getBadgeClass()}>
            {count === 0 ? "zero" : count}
          </span>
        </div>
        <div className='col'>
          <button
            className='btn btn-secondary mx-1'
            onClick={() => onIncrement()}
          >
            +
          </button>
          <button
            className='btn btn-secondary mx-2'
            onClick={() => onSubstitution()}
            disabled={count === 0}
          >
            -
          </button>
          <button
            className='btn btn-danger'
            onClick={() => onDelete(index, count)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
