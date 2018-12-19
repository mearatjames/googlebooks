import React from "react";
import "./Content.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const Content = props => (
  <Grid item xs={6} md={4}>
    <Card 
    onClick={() => props.handleSelect(props.id)}
    className="card" >
    <CardActionArea>
      <CardContent>
      <CardMedia
        className="media"
        image={props.image}
        title={props.name}
      />
      </CardContent>
    </CardActionArea>
  </Card>
  </Grid>
)

export default Content;
