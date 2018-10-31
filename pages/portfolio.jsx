import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";

const styles = () => ({
  mainWrapper: {
    display: "flex",
    height: "100vh",
    flexDirection: "column"
  }
});

function MyApp(props) {
  const {classes} = props;
  return (
    <React.Fragment>
      <div className={classes.mainWrapper}>
        <Navbar active="portfolio"/>
        <Footer />
        <Portfolio />
      </div>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MyApp);
