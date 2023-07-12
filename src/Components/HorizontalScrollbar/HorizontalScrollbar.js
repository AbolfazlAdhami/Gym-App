import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

 

const HorizontalScrollbar = () => {
  const { bodyPartes } = useSelector((state) => state.bodyPart);
  console.log(bodyPartes);

  return (
 <h2>
  HorizontalScrollbar
 </h2>
  );
};
export default HorizontalScrollbar;
