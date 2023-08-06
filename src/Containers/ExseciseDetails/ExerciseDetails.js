import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { fetchData } from "../../Data/FetchData";

// Components
import Details from "./Details";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";

function ExerciseDetails() {
  const { id } = useParams();
  const [exercise, setExercise] = useState({});
  const getExercise = async () => {
    const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`);
    console.log(data);
    setExercise({ ...data });
    console.log(exercise);
  };
  useEffect(() => {
    getExercise();
  }, [id]);

  return (
    <>
      <Details exerciseDetails={exercise} />
      <ExerciseVideos />
      <SimilarExercises />
    </>
  );
}

export default ExerciseDetails;
