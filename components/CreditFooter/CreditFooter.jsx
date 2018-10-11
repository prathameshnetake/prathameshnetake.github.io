import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    position: "fixed",
    background: theme.palette.primary.main,
    bottom: 0,
    width: "100%",
    height: 30,
    color: "white",
    flexGrow: 1,
    display: "flex"
  }
});

function CreditFooter(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      this is credit footer
    </div>
  );
}

CreditFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreditFooter);
