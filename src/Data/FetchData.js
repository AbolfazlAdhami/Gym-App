import axios from "axios";

const Access_Code = "5365562dc8msh06f2cc3162c0280p1fdfe0jsn6f7d79da7344";

// Fetch Exsersice Data

export const fetchExsercise = async (query = "") => {
  const exerciseOption = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/${query.trim()}`,
    headers: {
      "X-RapidAPI-Key": Access_Code,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const { data, status } = await axios.request(exerciseOption);
  console.log(data);
  //   if (status == 200) return data;
};
