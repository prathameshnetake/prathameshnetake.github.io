import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {get} from "jquery";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Preloader from "../Preloader/Preloader.jsx";
import moment from "moment";

const blogData = require("../../content/blogs.json");

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
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
});

class Portfolio extends React.Component {
  state = {
    blogs: [],
    showLoader: true
  }
  getBlogData = async () => {
    get(blogData.rss2json, response => {
      this.setState({blogs: response.item, showLoader: false});
    });
  }
  componentDidMount = () => {
    this.getBlogData();
  }

  handleCardClick = link => () => {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 300);
  }

  render() {
    const {classes} = this.props;
    const {showLoader} = this.state;
    return (
      <div className={classes.root}>
        {showLoader && <Preloader />}
        <Typography variant="button" color="primary" className={classes.title}>
          {showLoader ? "Getting blogs" : "blogs"}
        </Typography>
        <Grid container spacing={24}>
          {this.state.blogs.map(blog => {
            const description = blog["content:encoded"][0];
            const tagIndex = description.indexOf("<img"); // Find where the img tag starts
            const srcIndex = description.substring(tagIndex).indexOf("src=") + tagIndex; // Find where the src attribute starts
            const srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
            const srcEnd = description.substring(srcStart).indexOf("\"") + srcStart; // Find where the URL ends
            const src = description.substring(srcStart, srcEnd);
            const yourString = description.replace(/<img[^>]*>/g, ""); // replace with your string.
            const maxLength = 120; // maximum number of characters to extract
            // trim the string to the maximum length
            let trimmedString = yourString.substr(0, maxLength);
            // re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
            const regex = /(<([^>]+)>)/ig;
            trimmedString = trimmedString.replace(regex, "");
            console.log(blog);
            const duratiom = moment(blog.pubDate[0]).fromNow();
            return (
              <Grid item xs={12} sm={6} lg={3} key={blog.guid[0]._}>
                <Card className={classes.card} onClick={this.handleCardClick(blog.link[0])}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={blog.title}
                      className={classes.media}
                      height="140"
                      image={src}
                      title={blog.title}
                    />
                    <CardContent>
                      <Typography variant="subtitle2" color="textSecondary">{duratiom}</Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        {blog.title}
                      </Typography>
                      <Typography component="p">
                        {trimmedString} ...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
