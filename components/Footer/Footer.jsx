import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: 50,
    borderRight: `1px solid ${theme.palette.secondary.light}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  socialList: {
    padding: 0,
    margin: 0,
    listStyleType: "none"
  },
  socialItem: {
    margin: "1rem"
  }
});

function Footer(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
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
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
