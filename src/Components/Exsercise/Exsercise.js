import React, { useDeferredValue, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import ExerciseCard from "../ExerciseCard/ExerciseCard";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

const Exercises = () => {
  const { exseeciseList, status } = useSelector((store) => store.exserciseSlice);
  const { currentValue } = useSelector((state) => state.bodyPart);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  // Reset current page by choose another body part
  useEffect(() => {
    setCurrentPage(1);
  }, [currentValue]);
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exseeciseList.slice(indexOfFirstExercise, indexOfLastExercise);
  //   for Easy to load new Values I Used useDeferredValue Hook
  const deferredExsersice = useDeferredValue(currentExercises);
  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 950, behavior: "smooth" });
  };

  // Pagination

  switch (status) {
    case "idle":
      return <Loader />;
    case "loading":
      return <Loader />;
    case "success":
      return (
        <Box id="exercises" sx={{ scrollBehavior: "smooth" }} mt="1rem" p="1rem 2.5rem">
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="46px" textTransform={"capitalize"}>
            {`Showing Results ${currentValue != null ? currentValue : ""}`}
          </Typography>
          <Stack direction="row" sx={{ gap: { lg: "5rem", xs: "3rem" } }} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, id) => (
              <ExerciseCard key={id} exercise={exercise} />
            ))}
          </Stack>

          <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
            {exseeciseList.length > 9 && (
              <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exseeciseList.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large" />
            )}
          </Stack>
        </Box>
      );
    default:
      return null;
  }
};

export default Exercises;
