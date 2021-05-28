import React from "react";
import Counter from "./counter";

const Counters = ({
  counters,
  onIncrement,
  onSubstitution,
  onReset,
  onDelete
}) => {
  return (
    <div>
      <button className='btn btn-sm btn-primary m-3' onClick={onReset}>
        Reset
      </button>
      {counters.map((counter, index) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onSubstitution={onSubstitution}
          onDelete={onDelete}
          index={index}
        />
      ))}
    </div>
  );
};

export default Counters;
