import React from "react";
import "./Content.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { relative } from "path";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  btnText: {
    textTransform: 'none',
    height: 'auto',
    fontSize: '30px',
    maxWidth: '500px',
    paddingTop: 0,
    marginTop: "-5px"

  },
  button: {
    padding: "16px",
    display: 'flex',
    justifyContent: 'flex-start',
  },
  container: {
    minWidth: '100%'
  }
});

const Content = props => {
  const { classes } = props;

  return (
    <Grid item>
      <List className={classes.root}>
        {props.books.map((i, index) => (
          <ListItem key={index} alignItems="flex-start">
            <img src={i.volumeInfo.imageLinks.thumbnail} />
          <div className={classes.container}>
            <Button 
              href={i.volumeInfo.infoLink}
              className={classes.btnText}
              size='large'
              >
              {i.volumeInfo.title}
            </Button>
            {/* <a href="#">Author</a> */}
            <ListItemText
              primary={i.volumeInfo.authors ? i.volumeInfo.authors.join(', ') + " - " + i.volumeInfo.publishedDate.slice(0, 4) : ""}
              secondary= {i.volumeInfo.description}
              />
              <div className={classes.button}>
              <Button variant="contained" size="small">
                <SaveIcon />
                Save
              </Button>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
