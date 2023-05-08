import { Box, Stack, Typography } from "@mui/material";

const Herobanner = () => {
  return (
    <Box sx={{ mt: { lg: "20rem", xs: "7rem" }, ml: { sm: "5rem" } }}>
      <Typography sx={{ color: "#e74c3c", fontSize: "2.6rem", fontWeight: 600 }} variant="h6">
        Fitness Club
      </Typography>
      <Typography sx={{ fontSize: "4rem", fontWeight: 700, color: "#2c3e50" }} variant="h4">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography></Typography>
    </Box>
  );
};

export default Herobanner;
