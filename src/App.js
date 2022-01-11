import React            from 'react';
import {ThemeProvider}  from '@mui/material/styles';
import CssBaseline      from "@mui/material/CssBaseline";
import theme            from "./constants/theme";
import Router           from "./routes/Router";
import GlobalState      from "./constants/GlobalState";

/*


*/

const App = () => {
  return (
    
    <GlobalState>
      <ThemeProvider theme={theme}>
        <CssBaseline />

          <Router />
          
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;

/*

    <GlobalState>

      <ThemeProvider theme={theme}>
      <CssBaseline />

        <Router />

      </ThemeProvider>

    </GlobalState>

    */
