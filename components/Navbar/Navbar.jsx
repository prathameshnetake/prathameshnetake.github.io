import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "next/link";

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
  }
});

function ButtonAppBar(props) {
  const {classes, active} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
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
              <Button className={classnames(classes.navLink, {active: active === "contact"})}>Contact</Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
};

export default withStyles(styles)(ButtonAppBar);
