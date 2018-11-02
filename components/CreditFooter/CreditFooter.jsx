import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    position: "fixed",
    background: theme.palette.primary.main,
    bottom: 0,
    width: "100%",
    height: 30,
    color: "white",
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 10
  },
  credit: {
    color: "white",
    padding: "0 1rem",
    "& a": {
      color: "white"
    }
  }
});

function CreditFooter(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography color="textPrimary" className={classes.credit}>
        Design with &hearts; by <a target="_blank" href="https://www.behance.net/akhileshte3fd4/">akhilesh_tetambe</a>
      </Typography>
    </div>
  );
}

CreditFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreditFooter);
