import React from "react";
import { Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import Icons from "../../assets/icons/gym.png";
import { changeValue } from "../../Store/Reduceres/bodyPartSlice";

function BodyPart({ name }) {
  const dispatch = useDispatch();

  return (
    <Stack
      alignItems={"center"}
      gap={1}
      justifyContent={"center"}
      type="button"
      className="bodyPart-card"
      sx={{ cursor: "pointer", border: "1px solid #636e72", padding: "3rem 5rem", borderRadius: 3, width: "25rem" }}
      onClick={() => {
        dispatch(changeValue(name));
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icons} alt="icons" style={{ width: "10rem", objectFit: "cover" }} />
      <Typography fontSize={"1.3rem"} fontWeight={"600"} textTransform={"uppercase"} color="#636e72">
        {name}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
