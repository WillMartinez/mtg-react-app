import * as React from 'react';
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  withStyles,
  Theme,
  createStyles,
  WithStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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

type State = {
  open: boolean;
};

class NavBar extends React.Component<WithStyles<typeof styles>, State> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={this.props.classes.grow}
              variant="h6"
              color="inherit"
            >
              Magic the Gathering Drafter
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
