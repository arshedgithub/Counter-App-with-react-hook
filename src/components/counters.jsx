import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onIncrement, onSubstitution }) => {
  return (
    <div>
      <button className="btn btn-primary m-3">Reset</button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onSubstitution={onSubstitution}
        />
      ))}
    </div>
  );
};

export default Counters;
