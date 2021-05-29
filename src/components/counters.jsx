import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({ setTotalCount, totalCount }) => {
  const [initialCount, setInitialCount] = useState(["1", "2", "3", "4"]);

  const onReset = () => {
    setInitialCount(["1", "2", "3", "4"]);
    setTotalCount(0);
  };

  const onDelete = (index, count) => {
    initialCount.splice(
      initialCount.findIndex(id => id === index),
      1
    );
    setInitialCount([...initialCount]);
    setTotalCount(totalCount - count);
  };

  return (
    <div>
      <button className='btn btn-sm btn-primary m-3' onClick={onReset}>
        Reset
      </button>
      {initialCount.map(value => (
        <Counter
          key={value}
          index={value}
          onDelete={onDelete}
          setTotalCount={setTotalCount}
          totalCount={totalCount}
        />
      ))}
    </div>
  );
};

export default Counters;
