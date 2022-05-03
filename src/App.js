import React from "react";
import FlexDisplay from "./components/Flex/FlexDisplay";
import GridDisplay from "./components/Grid/GridDisplay";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FlexDisplay replace to="/flex" />} />
        <Route path="/flex" element={<FlexDisplay />} />
        <Route path="/grid" element={<GridDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
