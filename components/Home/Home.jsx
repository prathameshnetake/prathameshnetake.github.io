import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
        Full Stack Developer & Designer
      </Typography>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
