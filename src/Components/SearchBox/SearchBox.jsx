import React, { useContext, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

// Component Importes
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";

import { useDispatch } from "react-redux";
import { fetchSearchExsercise } from "../../Store/Reduceres/exserciseSlice";

// Component Importes

function SearchBox() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  // FetchData for Search Exersices

  return (
    <Stack justifyContent={"center"} alignItems={"center"} mt={"10rem"} px={"2rem"} py={"3rem"}>
      <Typography fontWeight={600} color={"#2c3e50"} textAlign={"center"} fontSize={{ lg: "3.5rem", xs: "3rem" }} mt={"1rem"}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box sx={{ position: "relative", my: "2rem" }}>
        <TextField
          height="7rem"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "0.5rem", fontSize: "1.5rem", "&:hover": { outline: "none", border: "none" } },
            width: { lg: "80rem", xs: "35rem" },
            backgroundColor: "#f5f5f5",
            borderRadius: "4rem",
            outline: "none",
            "&:hover": { outline: "none", border: "none" },
            "&:focus": { border: "0.1rem solid red" },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          onClick={() => dispatch(fetchSearchExsercise(search))}
          sx={{
            bgcolor: "#e74c3c",
            color: "#f5f5f5",
            textTransform: "none",
            width: "10rem",
            height: "100%",
            fontSize: "1.5rem",
            fontWeight: 700,
            position: "absolute",
            right: "0%",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ overflowX: "auto", width: { sx: "auto", md: "100vw" } }}>
        <HorizontalScrollbar />
      </Box>
    </Stack>
  );
}

export default SearchBox;
