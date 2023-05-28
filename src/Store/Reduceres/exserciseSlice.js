import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../Data/FetchData";

export const fetchExsercisTarget = createAsyncThunk("exsercise/fetchExsercisTarget", async (target) => {
  const respone = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${target}`);

  return respone;
});

export const fetchSearchExsercise = createAsyncThunk("exsercise/fetchSearchExsercise", async (searchValue) => {
  const respone = await fetchData("https://exercisedb.p.rapidapi.com/exercises");

  const filterResult = respone.filter(
    (item) =>
      item.name.toLowerCase().includes(searchValue) ||
      item.target.toLowerCase().includes(searchValue) ||
      item.equipment.toLowerCase().includes(searchValue) ||
      item.bodyPart.toLowerCase().includes(searchValue),
  );

  return filterResult;
});

const initialState = {
  exseeciseList: [],
  status: "idle", // "loading" "success" "error" "idle"
};

const exserciseSlice = createSlice({
  name: "exsercise",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchExsercisTarget.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchExsercisTarget.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchExsercisTarget.fulfilled, (state, action) => {
        state.status = "success";
        state.exseeciseList = [...action.payload];
      })
      .addCase(fetchSearchExsercise.fulfilled, (state, action) => {
        state.status = "success";
        state.exseeciseList = [...action.payload];
      })
      .addCase(fetchSearchExsercise.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSearchExsercise.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default exserciseSlice.reducer;
