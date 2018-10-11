import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 50,
    backgroundImage: "url(/static/assets/desk.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem"
  },
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

function Footer(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant="display4" color="primary" gutterBottom>
        Prathamesh Netake
      </Typography>
      <Typography variant="display1">
        Full Stack JavaScript Developer & Designer 
      </Typography>
      <Typography variant="title" color="secondary">
        since 2016
      </Typography>
      <Button variant="contained" size="small" className={classes.cvBtn}>
        <Typography variant="subheading" className={classes.cvText}>
          Download CV
        </Typography>
      </Button>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
