import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Head from "next/head";

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
      <Head>
        <title>Blogs | Prathamesh Netake</title>
      </Head>
      <div className={classes.mainWrapper}>
        <Navbar active="experience"/>
        <Footer />
        <Experience />
      </div>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MyApp);
