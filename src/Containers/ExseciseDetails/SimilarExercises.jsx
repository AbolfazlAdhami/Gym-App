import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import useSWR from "swr";
import { fetchExercise } from "../../Data/FetchData";
import Loader from "../../Components/Loader/Loader";
import Exercisescrollbar from "./ExserciseScroller";

const SimilarExercises = ({ target, equipment }) => {
  const targetMuscleExercises = useSWR(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`, fetchExercise);
  const equipmentExercises = useSWR(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`, fetchExercise);
  console.log(targetMuscleExercises);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }} fontWeight={700} color="#000" mb="33px">
        Target Muscle:<span style={{ color: "#FF2625", textTransform: "capitalize" }}>{target}</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {!targetMuscleExercises.isLoading ? <Exercisescrollbar data={targetMuscleExercises.data} /> : <Loader />}
      </Stack>
      <Typography sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px", mt: { lg: "100px", xs: "60px" } }} fontWeight={700} color="#000" mb="33px">
        Equipment:<span style={{ color: "#FF2625", textTransform: "capitalize" }}>{equipment}</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {!equipmentExercises.isLoading ? <Exercisescrollbar data={equipmentExercises.data} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
