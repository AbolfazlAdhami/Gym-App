import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ gap: { sm: "2rem", xs: "1rem" }, mt: { sm: "3rem", xs: "2rem" }, justifyContent: "none" }} px="2rem">
      <Link to="/">
        <img src={Logo} alt="logoImage" style={{ width: { md: "10rem", xs: "7rem" }, objectFit: "cover", textDecoration: "none" }} />
      </Link>
      <Stack sx={{ fontSize: "3rem", ml: { lg: "4rem", xs: "2rem" } }} direction={"row"} gap={"3rem"}>
        <NavLink to={"/"} style={{ color: "#2c3e50", transition: "all 0.3s ease" }}>
          Home
        </NavLink>
        <a
          href="#exsersise"
          style={{
            color: "#2c3e50",
          }}
        >
          Exsersise
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
