import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initState:{
    query: "",
    feed: [],
    status: "idle", // "idle" "succses" "errore" "faild"
  },
  reducers: {
    searchQuery(state, action) {
      console.log(action.payload);
    },
  },
});

export default searchSlice = searchSlice.reducer;
