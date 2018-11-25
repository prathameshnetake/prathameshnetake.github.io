import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import classnames from "classnames";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  navList: {
    display: "flex",
    margin: 0,
    padding: 0,
    flexGrow: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none"
  },
  navLink: {
    margin: ".5rem",
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
      width: "100%",
      background: "black",
      borderBottom: `3px solid ${theme.palette.primary.main}`
    }
  },
  socialList: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-evenly"
  },
  socialItem: {
    margin: "1rem",
    width: 25
  }
});

class TemporaryDrawer extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = open => () => {
    this.setState({
      open
    });
  };

  render() {
    const {classes, active} = this.props;
    const fullList = (
      <div className={classes.fullList}>
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
        <Divider />
        <ul className={classes.socialList}>
          <li className={classes.socialItem}>
            <a target="_blank" href="https://www.linkedin.com/in/prathamesh-netake-64264123">
              <img src="/static/social/linkedin.svg" alt="facebook"/>
            </a>
          </li>
          <li className={classes.socialItem}>
            <a target="_blank" href="https://github.com/prathameshnetake">
              <img src="/static/social/github.svg" alt="GitHub"/>
            </a>
          </li>
          <li className={classes.socialItem}>
            <a target="_blank" href="https://medium.com/@prathamesh.netake">
              <img src="/static/social/medium.svg" alt="Medium"/>
            </a>
          </li>
          <li className={classes.socialItem}>
            <a target="_blank" href="https://twitter.com/prathu_netake">
              <img src="/static/social/twitter.svg" alt="Twitter"/>
            </a>
          </li>
        </ul>
      </div>
    );

    return (
      <div>
        <Drawer anchor="top" open={this.props.open} onClose={this.props.handleClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.handleClose}
            onKeyDown={this.props.handleClose}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
