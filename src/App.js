import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark, light } from "./styles/Themes";

// Components and sections
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";

function App() {
  const [theme, settheme] = React.useState(light);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navigation />
        {/* <button onClick={() => settheme(theme === light ? dark : light)}>{theme === light ? 'dark' : "light"}</button> */}
        {/* <button onClick={settheme(dark)}>dark</button> */}
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
