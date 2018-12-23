import * as React from 'react';
import './App.css';
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  Grid,
  withStyles,
  Theme,
  createStyles,
  MuiThemeProvider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import theme from './theme';

// Theme-dependent styles
const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  });

class App extends React.Component {
  public render() {
    return (
      <Grid container={true}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Draft
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
