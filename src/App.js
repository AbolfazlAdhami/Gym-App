import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import ExerciseDetails from "./Containers/ExerciseDetails";
import Home from "./Containers/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/exerciseDetails/:id" element={<ExerciseDetails />} />
      </Routes>
    </div>
  );
};

export default App;
