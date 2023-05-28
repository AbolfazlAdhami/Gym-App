import { configureStore } from "@reduxjs/toolkit";
import bodyPart from "./Reduceres/bodyPartSlice";
import exserciseSlice from "./Reduceres/exserciseSlice";
const store = configureStore({
  reducer: {
    bodyPart,
    exserciseSlice,
  },
});

export default store;
