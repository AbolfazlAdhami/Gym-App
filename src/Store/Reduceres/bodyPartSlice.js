import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../Data/FetchData";

export const fetchBodyPart = createAsyncThunk("Body_Part/fetchBodyPart", async () => {
  const respone = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`);

  return respone;
});

const initialState = {
  currentValue: null,
  bodyPartes: [],
  status: "idle", // "idle"  , "failed" , "success" , "error" , "loading"
};

const bodyPart = createSlice({
  name: "Body_Part",
  initialState,
  reducers: {
    changeValue: {
      reducer(state, action) {
        state.currentValue = action.payload;
        return state;
      },
    },
    resetValueBodyPartes: {
      reducer(state, action) {
        state.currentValue = null;
        state.status = "idle";
        return state;
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBodyPart.pending, (state, action) => {
        state.status = "loading";
        return state;
      })
      .addCase(fetchBodyPart.fulfilled, (state, action) => {
        state.status = "success";

        state.bodyPartes = action.payload;
        return state;
      })
      .addCase(fetchBodyPart.rejected, (state, action) => {
        state.status = "failed";
        return state;
      });
  },
});

export const { changeValue, resetValueBodyPartes } = bodyPart.actions;

export default bodyPart.reducer;
