import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {get} from "jquery";
const blogData = require("../../content/blogs.json");

const styles = () => ({
  root: {
    flexGrow: 1,
    marginLeft: 50,
    backgroundPosition: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem"
  }
});

class Portfolio extends React.Component {
  state = {
    blogs: []
  }
  getBlogData = async () => {
    const data = {
      rss_url: blogData.mediumUrl
    };
    get(blogData.rss2json, data, response => {
      this.setState({blogs: response.items});
    });
  }
  componentDidMount = () => {
    this.getBlogData().then(data => {
      console.log(data);
    });
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        {this.state.blogs.map(blog => <div key={blog.guid}>
          {blog.title}
          <img src={blog.thumbnail} />
        </div>)}
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
