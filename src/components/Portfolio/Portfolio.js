import React from "react";
import "./portfolio.css";
import {  Grid} from "@material-ui/core";
//import { SectionTitle } from "../About/About";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    border: "1px solid #ccc",
  },
  media: {
    height: 170,
    padding: "3px",
    backgroundSize: "cover",
  },
  content:{
    minHeight:"200px"
  }
});

function Portfolio(projects) {
  const classes = useStyles();
  //const { name, category, image, link, description } = projects.data[2];
  //console.log(name, category, image, link);
  return (
    <Grid container className="section" spacing={3}>
      {projects.data.map((data, index) => {
        const { name, category, image, link, description } = data;
        return (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={name}
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={link} target="_blank" rel="noreferrer"> Demo</a>
                </Button>
                <Button size="small" color="primary">
                  {category}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Portfolio;
