import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {},
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  navList: {
    display: "flex",
    margin: 0,
    padding: 0,
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  navLink: {
    margin: "0 1rem",
    fontWeight: 600,
    color: theme.palette.primary.main,
    "&:hover": {
      background: "transparent"
    }
  }
});

function ButtonAppBar(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <ul className={classes.navList}>
            <li>
              <Button className={classes.navLink}>Home</Button>
            </li>
            <li>
              <Button className={classes.navLink}>About</Button>
            </li>
            <li>
              <Button className={classes.navLink}>Portfolio</Button>
            </li>
            <li>
              <Button className={classes.navLink}>Experiance</Button>
            </li>
            <li>
              <Button className={classes.navLink}>Contact</Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
