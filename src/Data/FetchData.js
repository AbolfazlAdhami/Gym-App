import axios from "axios";

const Access_Code = "1f51780bc6msh0135ca7981ae452p1c991ajsn1bbd0375b33c";
// Fetch Exsersice Data

export const fetchData = async (query) => {
  const exerciseOption = {
    method: "GET",
    url: query,
    headers: {
      "X-RapidAPI-Key": Access_Code,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const { data, status } = await axios.request(exerciseOption);

  if (status === 200) return data;
};

export const fetchVideos = async (query) => {
  const options = {
    method: "GET",
    url: "https://youtube-search-and-download.p.rapidapi.com/search",
    params: {
      query: `${query}`,
      hl: "en",
      sort: "v",
    },
    headers: {
      "X-RapidAPI-Key": "5365562dc8msh06f2cc3162c0280p1fdfe0jsn6f7d79da7344",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

  const { status, data } = await axios.request(options);

  if (status === 200) {
    return data.contents;
  }
};

export const fetchExercise = async (query) => {
  const exerciseOption = {
    method: "GET",
    url: query,
    headers: {
      "X-RapidAPI-Key": Access_Code,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const { data, status } = await axios.request(exerciseOption);
  console.log(data);
  if (status === 200) return data;
};
