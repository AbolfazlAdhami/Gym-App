import React from "react";
import { Box } from "@mui/material";
import { HeroBanner } from "../index";
import { SearchBox } from "../../Components";

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchBox />
    </Box>
  );
}

export default Home;
