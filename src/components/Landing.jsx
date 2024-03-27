import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import prestonPics from "../photos";

const Landing = () => {
  return (
    <Box
      sx={{
        width: "60%",
        height: "60%",
        overflowY: "scroll",
        margin: "0 auto",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {prestonPics.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Landing;
