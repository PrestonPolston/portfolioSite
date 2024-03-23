import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  List,
  Drawer,
  ListItem,
} from "@mui/material";
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ListTwoToneIcon from "@mui/icons-material/ListTwoTone";
import { useDispatch } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { setTheme } from "../slice/themeSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = (mode) => {
    setDarkMode(mode);
    dispatch(setTheme(mode));
  };

  const openDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div>
      <Box>
        <AppBar position="fixed" elevation={16}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => openDrawer(true)}
              sx={{ mr: 2 }}
            >
              <ListTwoToneIcon fontSize="large" />
            </IconButton>
            <Box sx={{ flexGrow: 10 }} />
            {darkMode ? (
              <IconButton onClick={() => changeTheme(false)}>
                <NightlightIcon fontSize="medium" />
              </IconButton>
            ) : (
              <IconButton onClick={() => changeTheme(true)}>
                <LightModeIcon fontSize="medium" />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClick={() => setOpen(false)}>
          <List>
            <ListItemButton>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="/aboutMe"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About Me
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="/contactMe"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact Me
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="/resume"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Resume
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="/myProjects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                My Projects
              </Link>
            </ListItemButton>
          </List>
        </Drawer>
      </Box>
    </div>
  );
};

export default NavBar;
