import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 0 },
    { id: 4, value: 2 }
  ]);

  const handleIncrement = (counter, index) => {
    counters[index].value = counter.value + 1;
    setCounters([...counters]);
  };

  const handleSubstitution = (counter, index) => {
    counters[index].value = counter.value - 1;
    setCounters([...counters]);
  };

  const handleReset = () => {
    setCounters([
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]);
  };

  const handleDelete = counterID => {
    setCounters([...counters.filter(c => c.id !== counterID)]);
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.filter(c => c.value > 0).length} />
      <Counters
        counters={counters}
        onIncrement={handleIncrement}
        onSubstitution={handleSubstitution}
        onReset={handleReset}
        onDelete={handleDelete}
      />
    </React.Fragment>
  );
};

export default App;
