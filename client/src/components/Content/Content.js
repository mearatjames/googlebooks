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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
            <img alt={i.title} src={i.image} />
          <div className={classes.container}>
            <Button 
              href={i.link}
              className={classes.btnText}
              size='large'
              >
              {i.title}
            </Button>
            <ListItemText
              primary={i.authors + " - " + i.year}
              secondary= {i.description}
              />
              <div className={classes.button}>
              <IconButton 
              onClick={() => props.handleSave ? props.handleSave(index) : props.handleDelete(index)}
              variant="contained"
              size="small">
                {props.handleSave ? <SaveIcon /> : <DeleteIcon />}
              </IconButton>
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
