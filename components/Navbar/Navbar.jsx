import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "../Drawer/Drawer.jsx";
import Link from "next/link";

const styles = theme => ({
  root: {},
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.primary.main
    }
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
    fontWeight: 700,
    "&:hover": {
      background: "transparent"
    },
    "&.active": {
      color: theme.palette.primary.main
    },
    "&.active > span:first-child": {
      position: "relative"
    },
    "&.active > span:first-child:before": {
      content: "''",
      position: "absolute",
      bottom: -3,
      left: 0,
      height: 3,
      width: "50%",
      background: "black",
      borderBottom: `3px solid ${theme.palette.primary.main}`
    }
  },
  tool: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

class ButtonAppBar extends React.Component {
  state = {
    drawerOpen: false
  }

  handleDrawerClose = () => {
    this.setState({drawerOpen: false});
    this.forceUpdate();
  }

  openDrawer = () => {
    this.setState({drawerOpen: true});
  }

  render() {
    const {classes, active} = this.props;
    return (
      <div className={classes.root}>
        <Drawer open={this.state.drawerOpen} handleClose={this.handleDrawerClose} active={this.props.active}/>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.tool}>
            <ul className={classes.navList}>
              <li>
                <Link href="/">
                  <Button className={classnames(classes.navLink, {active: active === "home"})}>Home</Button>
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch>
                  <Button className={classnames(classes.navLink, {active: active === "about"})}>About</Button>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" prefetch>
                  <Button className={classnames(classes.navLink, {active: active === "portfolio"})}>Portfolio</Button>
                </Link>
              </li>
              <li>
                <Link href="/experience" prefetch>
                  <Button className={classnames(classes.navLink, {active: active === "experience"})}>Experience</Button>
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch>
                  <Button className={classnames(classes.navLink, {active: active === "contact"})}>Contact</Button>
                </Link>
              </li>
            </ul>
          </Toolbar>
          <Toolbar className={classes.mobile}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openDrawer}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
};

export default withStyles(styles)(ButtonAppBar);
