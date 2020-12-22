import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    margin: "0px 50px 50px",
    maxWidth: 345,
    overflow: "visible"
  },
  media: {
    margin: "-70px auto 0",
    width: "80%",
    height: 140,
    borderRadius: "4px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000
  }
};

function MediaCard2(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Coming Soon!
          </Typography>
          <Typography component="p">
          A project to show all the types of algorithms and data structures with space and time complexity. (JavaScript)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" disabled>
          COMING SOON
        </Button>
        <Button href="https://github.com/kiyooswrld/algoDS" target="_blank" size="small" color="primary">
          Github
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard2);