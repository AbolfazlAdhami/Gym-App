import { Box, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../../assets/images/banner.png";
import "./HeroBanner.css";
const Herobanner = () => {
  return (
    <Box sx={{ mt: { lg: "10rem", xs: "7rem" }, ml: { xs: "5rem" }, mb: "12rem" }}>
      <Typography sx={{ color: "#e74c3c", fontSize: "2.6rem", fontWeight: 600 }} variant="h6">
        Fitness Club
      </Typography>
      <Typography sx={{ fontSize: "4rem", fontWeight: 700, color: "#2c3e50" }} variant="h4">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography sx={{ fontSize: { lg: "2.2rem", sm: "1.5rem", xs: "2.5rem" } }} fontFamily="Alegreya" lineHeight="2.5rem">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a href="#exercises" className="hero-btn">
          Explore Exercises
        </a>
      </Stack>
      <Typography fontWeight={600} color="#e74c3c" sx={{ opacity: "0.1", display: { lg: "block", xs: "none" }, fontSize: "20rem", mt: 2 }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default Herobanner;
