import React from "react";
import { Box } from "@mui/material";
import { HeroBanner } from "../index";
import { SearchBox, Exercises } from "../../Components";

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchBox />
      <Exercises />
    </Box>
  );
}

export default Home;
