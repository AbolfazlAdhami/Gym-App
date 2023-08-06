import React, { useContext, useDeferredValue } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";

import ExerciseCard from "../../Components/ExerciseCard/ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const Exercisescrollbar = ({ data }) => {
  const dataDeff = useDeferredValue(data);

  return (
    <Stack sx={{ width: "100%", height: "60rem", overflowX: "hidden" }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((item) => (
          <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 10px">
            <ExerciseCard exercise={item} />
          </Box>
        ))}
      </ScrollMenu>
    </Stack>
  );
};
export default Exercisescrollbar;
