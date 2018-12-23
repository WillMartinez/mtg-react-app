import * as React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import NavBar from './drafter/components/NavBar';

class App extends React.Component {
  public render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <NavBar />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
