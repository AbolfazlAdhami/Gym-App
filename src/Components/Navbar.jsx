import { Stack } from "@mui/material";
import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: "12.3rem", xs: "4rem" }, mt: { sm: "3.2rem", xs: "2rem" }, justifyContent: "none" }} px="2rem">
      <Link to={"/"}>
        <img src={logo} alt="logo" style={{ width: "6rem", height: "5rem", margin: "0 2rem" }} />
      </Link>

      <Stack direction="row" gap="4rem" fontFamily="Alegreya" fontSize="2.5rem" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: "none", color: "#3A1212", borderBottom: "0.1rem solid #FF2625" }}>
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
