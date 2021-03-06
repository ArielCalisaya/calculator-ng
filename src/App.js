import React from "react";
import Calculator from "./components/Calculator";

// Material-UI theme creator
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import customTheme from "./util/theme.js";

const theme = createMuiTheme(customTheme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Calculator />
      </div>
    </MuiThemeProvider>
  );
}
export default App;
