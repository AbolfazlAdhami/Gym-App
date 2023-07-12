import React, { useEffect } from "react";
import ContextProvider from "./Context/mainContext";
import { Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import { ExerciseDetails, Home } from "./Containers/index";

// Redux StateMagager Importes
import { useDispatch, useSelector } from "react-redux";
import { fetchBodyPart } from "./Store/Reduceres/bodyPartSlice";
import { fetchSearchExsercise, fetchExsercisTarget } from "./Store/Reduceres/exserciseSlice";

const App = () => {
  const { currentValue } = useSelector((state) => state.bodyPart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBodyPart());
    dispatch(fetchSearchExsercise(""));
  }, []);

  useEffect(() => {
    if (currentValue != null) dispatch(fetchExsercisTarget(currentValue));
  }, [currentValue]);

  return (
    <div className="App">
      <ContextProvider>
        {" "}
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/exerciseDetails/:id" element={<ExerciseDetails />} /> */}
        </Routes>
      </ContextProvider>
    </div>
  );
};

export default App;
