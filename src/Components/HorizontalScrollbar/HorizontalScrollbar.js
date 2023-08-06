import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import BodyPart from "./BodyPart";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import Loader from "../Loader/Loader";

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
const HorizontalScrollbar = () => {
  const { bodyPartes } = useSelector((state) => state.bodyPart);

  return (
    <Stack sx={{ width: "100%", height: "40rem" }}>
      {bodyPartes.length > 0 ? (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {bodyPartes.map((item) => (
            <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
              <BodyPart name={item} key={item} />
            </Box>
          ))}
        </ScrollMenu>
      ) : (
        <Loader />
      )}
    </Stack>
  );
};
export default HorizontalScrollbar;
