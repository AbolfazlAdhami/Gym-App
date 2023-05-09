import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function SearchBox() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} mt={"3rem"} px={"2rem"}>
      <Typography fontWeight={600} color={"#2c3e50"} textAlign={"center"} fontSize={{ lg: "3.5rem", xs: "3rem" }} mt={"1rem"}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box>
        
      </Box>
    </Stack>
  );
}

export default SearchBox;
