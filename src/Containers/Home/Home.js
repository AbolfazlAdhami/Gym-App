import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner } from "../index";
import { SearchBox } from "../../Components";
import Exsercise from "../../Components/Exsercise/Exsercise";

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchBox />
      <Exsercise />
    </Box>
  );
}

export default Home;
