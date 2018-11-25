import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CVButton from "../CVButton/CVButton.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 50,
    marginBottom: 30,
    backgroundImage: "url(/static/assets/desk.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: "1rem",
      backgroundPosition: "bottom"
    }
  }
});

function Home(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant="display4" color="primary" gutterBottom>
        Prathamesh Netake
      </Typography>
      <Typography variant="display1">
        Full Stack JavaScript Developer & Designer
      </Typography>
      <CVButton />
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
