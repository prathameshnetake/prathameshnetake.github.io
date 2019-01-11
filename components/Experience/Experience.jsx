import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CVButton from "../CVButton/CVButton.jsx";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "scroll",
    marginLeft: 50,
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1.5rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: "1rem"
    }
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "1rem 0"
  },
  expWrapper: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  data: {
    display: "flex"
  },
  caption: {
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    borderRight: `2px solid ${theme.palette.primary.main}`,
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      height: 15,
      width: 15,
      right: -8,
      borderRadius: "50%",
      background: "#FFF",
      border: `2px solid ${theme.palette.primary.main}`
    }
  },
  value: {
    width: 300,
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem"
  },
  btnWrapper: {
    textAlign: "center",
    padding: "3rem"
  }
});

function Home(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant="button" color="primary" className={classes.title}>Experience</Typography>
      <Grid className={classes.expWrapper} spacing={24} container>
        <Grid className={classes.edu} item xs={12} sm={6}>
          <Typography variant="title">
            Education
          </Typography>
          <div className={classes.data}>
            <div className={classes.caption}>
              <Typography variant="title">2016</Typography>
            </div>
            <div className={classes.value}>
              <Typography variant="title">B.E. Computer Engineering</Typography>
              <Typography variant="subtitle2">Datta Meghe College of Engineering, Airoli.</Typography>
            </div>
          </div>
          <div className={classes.data}>
            <div className={classes.caption}>
              <Typography variant="title">2012</Typography>
            </div>
            <div className={classes.value}>
              <Typography variant="title">HSC Science</Typography>
              <Typography variant="subtitle2">Fergusson College, Pune.</Typography>
            </div>
          </div>
          <div className={classes.data}>
            <div className={classes.caption}>
              <Typography variant="title">2009</Typography>
            </div>
            <div className={classes.value}>
              <Typography variant="title">SSC CBSE Board</Typography>
              <Typography variant="subtitle2">Navodaya Vidyalaya, Ratnagiri.</Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.edu} item xs={12} sm={6}>
          <Typography variant="title">
            Work
          </Typography>
          <div className={classes.data}>
            <div className={classes.caption}>
              <Typography variant="title">2018</Typography>
            </div>
            <div className={classes.value}>
              <Typography variant="title">Product Lead</Typography>
              <Typography variant="subtitle2">AITOE Labs Video Analytics</Typography>
            </div>
          </div>
          <div className={classes.data}>
            <div className={classes.caption}>
              <Typography variant="title">2017</Typography>
            </div>
            <div className={classes.value}>
              <Typography variant="title">Senior Full Stack JS Developer</Typography>
              <Typography variant="subtitle2">AITOE Labs Video Analytics</Typography>
            </div>
          </div>
          <div className={classes.data}>
            <div className={classes.caption}>
              <Typography variant="title">2016</Typography>
            </div>
            <div className={classes.value}>
              <Typography variant="title">Javascript Engineer</Typography>
              <Typography variant="subtitle2">Zeuslearning Pvt. Ltd.</Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.btnWrapper} item xs={12}>
          <CVButton />
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
