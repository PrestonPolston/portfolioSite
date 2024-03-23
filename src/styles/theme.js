import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";

const theme = () => {
  const currentTheme = useSelector((state) => state.theme);
  if (currentTheme === true) {
    return createTheme({
      palette: {
        mode: "dark",
      },
    });
  } else {
    return createTheme({
      palette: {
        mode: "light",
      },
    });
  }
};

export default theme;
