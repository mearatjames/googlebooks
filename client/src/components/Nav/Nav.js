import React from 'react';
import "./Nav.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "15px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "20px"
     }
  },
  rightToolbar: {
    marginLeft: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
     textAlign: 'center'
    }
  },
  appName: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
      }
    }
});

function Nav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={props.highlight} position="relative" color="default">
        <Toolbar>
      <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography className={classes.appName} variant="h6" color="inherit">
         <p>Books Search App</p> 
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography className={classes.rightToolbar} variant="h6" color="inherit">
        <p>Google Books API</p>
        </Typography>
      </Grid>
      </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);