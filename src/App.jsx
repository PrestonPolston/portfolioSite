import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import MediaLinks from "./components/MediaLinks";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import MyProjects from "./components/MyProjects";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <NavBar />
        <div style={{ paddingTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            {/* <Route path="/contactMe" element={<ContactMe />} /> */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/myProjects" element={<MyProjects />} />
          </Routes>
          <MediaLinks />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
