import * as React from 'react';
import './App.css';
import { AppBar, IconButton, Typography, Button, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


class App extends React.Component {
  public render() {
    return <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
  }
}

export default App;
