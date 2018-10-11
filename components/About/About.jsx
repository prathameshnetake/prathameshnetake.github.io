import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


const styles = () => ({
  root: {
    flexGrow: 1,
    marginLeft: 50,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem"
  },
  info: {
    display: "flex",
    padding: "3rem"
  },
  avatar: {
    width: 500,
    "& img": {
      width: "100%"
    }
  },
  aboutxt: {
    textTransform: "uppercase",
    marginBottom: "2rem"
  },
  skillImage: {
    width: 140,
    height: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: 75
    }
  },
  skillImagelist: {
    padding: 0,
    margin: "2rem 0",
    listStyleType: "none",
    display: "flex",
    "& li": {
      marginRight: "1rem"
    }
  },
  tagLine: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  quote: {
    width: "70%",
    padding: "2rem"
  }
});

function Footer(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <div className={classes.avatar}>
          <img src="/static/assets/avatar.png" alt="avatar image"/>
        </div>
        <div className={classes.content}>
          <Typography variant="h3" color="primary" className={classes.aboutxt}>
            About Me
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex laboriosam ea doloribus perspiciatis maxime fuga quaerat commodi voluptatum, maiores laudantium animi sapiente iusto ipsam sint voluptates, nisi eaque optio!
          </Typography>
          <ul className={classes.skillImagelist}>
            <li>
              <Paper className={classes.skillImage}>
                <img src="/static/assets/node.png" alt=""/>
              </Paper>
            </li>
            <li>
              <Paper className={classes.skillImage}>
                <img src="/static/assets/javascript.svg" alt=""/>
              </Paper>
            </li>
            <li>
              <Paper className={classes.skillImage}>
                <img src="/static/assets/react.svg" alt=""/>
              </Paper>
            </li>
            <li>
              <Paper className={classes.skillImage}>
                <img src="/static/assets/css.svg" alt=""/>
              </Paper>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.tagLine}>
        <img src="/static/assets/quote-open.png" alt=""/>
        <Typography variant="title" className={classes.quote} color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam soluta laudantium laborum consequuntur. Suscipit ad quam quos vel veritatis explicabo dolor. Reprehenderit natus ea minima nostrum. Autem, vel ut.
        </Typography>
        <img src="/static/assets/quote-close.png" alt=""/>
      </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
