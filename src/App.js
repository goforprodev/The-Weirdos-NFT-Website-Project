import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import {dark, light} from "./styles/Themes";

function App() {
  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={dark}>
      The weridos nft project
    </ThemeProvider>
    </>
  );
}

export default App;
