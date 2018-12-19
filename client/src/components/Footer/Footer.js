import React from 'react';
import "./Footer.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    footer: {
      padding: "10px",
      textAlign: 'center',
      backgroundColor: 'rgb(245, 245, 245)'
    },
    link: {
        textDecoration: "none",
        color: 'black'
    }
  });
  
  function Footer(props) {
    const { classes } = props;
  
    return (
      <div className={classes.footer}>
          <Typography variant="h6" color="inherit">
           <p>Create-React-App Homework</p>
           <a className={classes.link} href="https://github.com/mearatjames/clickygame">
            <p>Github Repository</p>
           </a> 
          </Typography>
      </div>
    );
  }
  
  Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);