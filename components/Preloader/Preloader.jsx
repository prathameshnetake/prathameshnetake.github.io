import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import "./preloader.css";

const styles = () => ({
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Preloader extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className="loader">
          <span>{"{"}</span><span>{"}"}</span>
        </div>
      </div>
    );
  }
}

Preloader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Preloader);
