import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

const App = () => {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <React.Fragment>
      <NavBar totalCounters={totalCount} />
      <Counters setTotalCount={setTotalCount} totalCount={totalCount} />
    </React.Fragment>
  );
};

export default App;
