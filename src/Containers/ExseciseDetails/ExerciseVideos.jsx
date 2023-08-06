import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import useSWR from "swr";

import Loader from "../../Components/Loader/Loader";
import { fetchVideos } from "../../Data/FetchData";

function ExerciseVideos({ name }) {
  const { data, isLoading } = useSWR(name, fetchVideos);

  if (isLoading) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography sx={{ fontSize: { lg: "44px", xs: "25px" } }} fontWeight={700} color="#000" mb="33px">
        Watch About <span style={{ color: "#FF2625", textTransform: "capitalize" }}>{name}</span> exercise videos on youtube
      </Typography>
      <Stack sx={{ flexDirection: { lg: "row" }, gap: { lg: "50px", xs: "0px" } }} justifyContent="center" flexWrap="wrap" alignItems="center">
        {data?.slice(0, 4)?.map((item, index) => (
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
            <img style={{ borderTopLeftRadius: "20px" }} loading="eager" src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: "28px", xs: "18px" } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
