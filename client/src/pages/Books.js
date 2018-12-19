import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Books extends Component {
    state = {
      books: [],
      query: ""
    }

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      console.log(this.state.query)
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      console.log(this.state.query.split(' ').join('+'))
      API.searchBooks(this.state.query.split(' ').join('+'))
        .then(res => {
          this.setState({ books: res })
          console.log(res)
        })
        .catch(err => console.log(err))
      this.setState({query: ""})
    }
    
    render() {
      const { classes } = this.props;

          return (
        <Grid item>
          <TextField
          id="standard-search"
          label="Search Books"
          type="search"
          name="query"
          value={this.state.query}
          className={classes.textField}
          margin="normal"
          onChange={this.handleInputChange}
          />
          <IconButton 
            aria-label="Search"
            className={classes.margin}
            onClick={this.handleFormSubmit}
            >
          <SearchIcon fontSize="small" />
          </IconButton>    
        </Grid>
          );
        }
      }
Books.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Books);