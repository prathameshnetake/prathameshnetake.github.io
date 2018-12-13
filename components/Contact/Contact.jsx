import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";
import {post} from "jquery";
import CircularProgress from "@material-ui/core/CircularProgress";

const url = require("../../content/blogs.json");

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "scroll",
    marginLeft: 50,
    marginBottom: 30,
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      padding: "1rem"
    }
  },
  title: {
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "2rem 0"
  },
  flex: {
    display: "flex",
    height: 90,
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.16)"
  },
  input: {
    borderRadius: 5,
    border: "1px solid rgba(112, 112, 112, 0.16)",
    background: "rgba(233, 231, 231, 0.26)",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
    padding: "0.25rem 1.5rem",
    "&::before": {
      border: 0
    },
    "&:hover::before": {
      border: 0
    },
    "& textarea": {
      paddingTop: "0.5rem",
      height: 300
    }
  },
  ipGrid: {
    marginTop: "0.5rem"
  },
  wrapper: {
    maxWidth: 1000,
    width: "100%",
    margin: "auto",
    marginTop: 0
  },
  height: {
    height: 300
  },
  cvBtn: {
    width: 150,
    height: 40,
    borderRadius: "25px",
    background: theme.palette.primary.main,
    color: "white",
    margin: "1rem 0",
    boxShadow: "none",
    "&:hover": {
      background: pink[600]
    },
    float: "right"
  },
  cvText: {
    color: "white",
    textTransform: "none"
  },
  icon: {
    width: 75,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: 30
    }
  },
  content: {
    flexGrow: 1,
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center"
  },
  buttonProgress: {
    color: pink[200],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    msg: "",
    done: false,
    notDone: true,
    inProgress: false,
    error: false
  }

  handleInputChange = name => evt => {
    this.setState({[name]: evt.target.value});
  }

  resetForm = () => {
    this.setState({name: "", email: "", msg: ""});
  }

  send = () => {
    this.setState({inProgress: true});
    post(url.email, JSON.stringify(this.state), (err, data) => {
      console.log(data);
      console.log(err);
      this.setState({inProgress: false, done: true});
      this.resetForm();
      // if (err) {
      //   this.setState({err: true});
      //   setTimeout(() => this.setState({notDone: true, err: false}), 2000);
      //   return;
      // }
    }, "json");
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="button" color="primary" className={classes.title}>contact me</Typography>
        <div className={classes.wrapper}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4} lg={4}>
              <Paper className={classes.flex}>
                <div className={classes.icon}>
                  <img src="/static/assets/home.png"/>
                </div>
                <div className={classes.content}>
                  <Typography>
                    Navi Mumbai, Mumbai
                  </Typography>
                  <Typography>
                    Maharashtra, India
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <Paper className={classes.flex}>
                <div className={classes.icon}>
                  <img src="/static/assets/phone.png"/>
                </div>
                <div className={classes.content}>
                  <Typography>
                    +91 9082199961
                  </Typography>
                  <Typography>
                    +91 9403640602
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <Paper className={classes.flex}>
                <div className={classes.icon}>
                  <img src="/static/assets/email.png"/>
                </div>
                <div className={classes.content}>
                  <Typography>
                    prathamesh.netake@gmail.com
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} lg={6} className={classes.ipGrid}>
              <Input
                fullWidth
                className={classes.input}
                placeholder="Your Name"
                onChange={this.handleInputChange("name")}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} className={classes.ipGrid}>
              <Input
                fullWidth
                className={classes.input}
                placeholder="Your Email ID"
                onChange={this.handleInputChange("email")}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} className={classes.ipGrid}>
              <Input
                fullWidth
                multiline
                className={classes.input}
                placeholder="Write your message here..."
                onChange={this.handleInputChange("msg")}
              />
            </Grid>
          </Grid>
          <Button variant="contained" size="small" className={classes.cvBtn} onClick={this.send} disabled={this.state.done || this.state.inProgress}>
            {this.state.notDone && !this.state.inProgress && !this.state.done ? <Typography variant="subheading" className={classes.cvText}>
              Send
            </Typography> : null}
            {this.state.error ? <Typography variant="subheading" className={classes.cvText}>
              Error try again
            </Typography> : null}
            {this.state.inProgress ? <Typography variant="subheading" className={classes.cvText}>
              <CircularProgress size={24} className={classes.buttonProgress} />
            </Typography> : null}
            {this.state.done ? <Typography variant="subheading" className={classes.cvText}>
              Thank you!
            </Typography> : null}
          </Button>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
