import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Content from "../components/Content"

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'center'
  },
});

class Saved extends Component {
    state = {
      books: []
    }

    componentDidMount() {
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      }
  
   
    handleDelete = index => {
        console.log('Deleted')
    //   API.saveBook(bookData)
    }
    
    render() {
      const { classes } = this.props;

      return (
        <React.Fragment>
        <Paper className={classes.paper} elevation={1}>
            <Typography variant="h5" component="h3">
            Saved Books
            </Typography>
        </Paper>
          <Grid container justify="center">
            <Content 
            books={this.state.books}
            handleDelete={this.handleDelete}
            />
          </Grid>   
        </React.Fragment>
          );
        }
      }
Saved.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Saved);