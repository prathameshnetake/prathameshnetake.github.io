import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Home from "@material-ui/icons/HomeRounded";

const styles = () => ({
  root: {
    flexGrow: 1,
    marginLeft: 50,
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    padding: "2rem"
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "2rem 0"
  },
  flex: {
    display: "flex"
  }
});

function Contact(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Typography variant="button" color="primary" className={classes.title}>contact me</Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4} lg={4}>
          <Paper className={classes.flex}>
            <div>
              <Home />
            </div>
            <div>
                this will be the address
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Paper className={classes.flex}>
            <div>
              <Home />
            </div>
            <div>
                this will be the address
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Paper className={classes.flex}>
            <div>
              <Home />
            </div>
            <div>
                this will be another one
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
