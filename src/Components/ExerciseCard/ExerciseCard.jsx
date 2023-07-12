import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  console.log(exercise.gifUrl);

  const navigate = useNavigate();
  return (
    <Box
      className="exercise-card"
      onClick={() => navigate(`/exerciseDetails/${exercise.id}`, { state: exercise })}
      sx={{ cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: " 0 0 2rem 2rem" }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{ ml: "21px", color: "#fff", background: "#FFA9A9", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize", "&:hover": { background: "#f17979" } }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: "21px", color: "#fff", background: "#FCC757", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize", "&:hover": { background: "#f3b93a" } }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: "2rem", xs: "1.8rem" } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Box>
  );
};

export default ExerciseCard;
