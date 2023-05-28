import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography className="right-arrow" onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography className="left-arrow" onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScrollbar() {
  const { currentValue, bodyPartes } = useSelector((state) => state.bodyPart);

  const BodyPartes = () => {
    if (bodyPartes.length > 0) {
      return (
        <Stack width="auto" display={"flex"} py={"2rem"} flexDirection={"row"} alignItems="center" justifyContent="center" gap={3}>
          {bodyPartes.map((name, index) => (
            <BodyPart key={index} name={name} />
          ))}
        </Stack>
      );
    }
    return <h3>null</h3>;
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      <BodyPartes />
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
