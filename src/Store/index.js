import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Reduceres/searchSlice";

const store = configureStore({ reducer: { search: searchSlice } });

export default store;
