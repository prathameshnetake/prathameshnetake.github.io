import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";

const styles = theme => ({
  cvBtn: {
    width: 200,
    height: 50,
    borderRadius: "25px",
    background: theme.palette.primary.main,
    color: "white",
    margin: "1rem 0",
    boxShadow: "none",
    "&:hover": {
      background: pink[600]
    }
  },
  cvText: {
    color: "white",
    textTransform: "none"
  }
});

const handleClick = () => {
  setTimeout(() => {
    const win = window.open("/static/resume.pdf", "_blank");
    win.focus();
  }, 250);
};

function CVButton(props) {
  const {classes} = props;
  return (
    <Button variant="contained" size="small" className={classes.cvBtn} onClick={handleClick}>
      <Typography variant="subheading" className={classes.cvText}>
          Download CV
      </Typography>
    </Button>
  );
}

CVButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CVButton);
