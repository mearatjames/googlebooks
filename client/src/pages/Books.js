import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Content from "../components/Content"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.searchBooks(this.state.query.split(' ').join('+'))
        .then(res => {
          let books = []
          res.data.forEach(element => {
            books.push({
              title: element.volumeInfo.title,
              authors: element.volumeInfo.authors ? element.volumeInfo.authors.join(', ') : "",
              description: element.volumeInfo.description ? element.volumeInfo.description : "",
              link: element.volumeInfo.infoLink,
              image: element.volumeInfo.imageLinks.thumbnail,
              year: element.volumeInfo.publishedDate ? element.volumeInfo.publishedDate.slice(0, 4) : ""
            })
          })
          this.setState({ books: books })
        })
        .catch(err => console.log(err))
    }

    handleSave = index => {
      let bookData = {
        title: this.state.books[index].title,
        authors: this.state.books[index].authors,
        description: this.state.books[index].description,
        link: this.state.books[index].link,
        image: this.state.books[index].image,
        year: this.state.books[index].year
      }
      API.saveBook(bookData)
      .then(res => {
        API.notification("Added: " + res.data.title)
      })
    }
    
    render() {
      const { classes } = this.props;

      return (
        <React.Fragment>
        <Grid container justify='center'>
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
          </Grid>
          <Grid container justify="center">
            <Content 
            books={this.state.books}
            handleSave={this.handleSave}
            />
          </Grid>   
        </React.Fragment>
          );
        }
      }
Books.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Books);