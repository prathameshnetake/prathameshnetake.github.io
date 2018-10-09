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
    justifyContent: "center"
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
          <img src="/static/social/facebook.svg" alt="facebook"/>
        </li>
        <li className={classes.socialItem}>
          <img src="/static/social/instagram.svg" alt="facebook"/>
        </li>
        <li className={classes.socialItem}>
          <img src="/static/social/linkedin.svg" alt="facebook"/>
        </li>
        <li className={classes.socialItem}>
          <img src="/static/social/twitter.svg" alt="facebook"/>
        </li>
      </ul>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
