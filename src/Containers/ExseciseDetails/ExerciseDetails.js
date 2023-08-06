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

    setExercise({ ...data });
  };
  useEffect(() => {
    getExercise();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <>
      <Details exerciseDetails={exercise} />
      <ExerciseVideos name={exercise?.name} key={exercise?.name} />
      <SimilarExercises equipment={exercise?.equipment} target={exercise?.target} />
    </>
  );
}

export default ExerciseDetails;
