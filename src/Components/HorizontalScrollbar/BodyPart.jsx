import React from "react";
import { Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Icons from "../../assets/icons/gym.png";
import { changeValue } from "../../Store/Reduceres/bodyPartSlice";

const BodyPart = ({ name }) => {
  const dispatch = useDispatch();
  const { currentValue } = useSelector((state) => state.bodyPart);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        currentValue === name
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "2.5rem",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "47px",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              transition: "all ease 0.3s",
              m: "0 2rem",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "4rem",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              transition: "all ease 0.3s",
              m: "0 2rem",
            }
      }
      onClick={() => {
        dispatch(changeValue(name));
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icons} alt="dumbbell" style={{ width: "6rem", height: "6rem" }} />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {" "}
        {name}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
