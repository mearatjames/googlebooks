import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Content from "../components/Content"
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    width: 200,
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginTop: '15px'
  }
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
            <form className={classes.flex}>
                <TextField
                id="standard-search"
                label="Search Books"
                type="search"
                name="query"
                className={classes.textField}
                value={this.state.query}
                className={classes.textField}
                onChange={this.handleInputChange}
                />
                <div>
                  <IconButton 
                    type="submit"
                    aria-label="Search"
                    onClick={this.handleFormSubmit}
                    className={classes.button}
                    >
                  <SearchIcon fontSize="small" />
                  </IconButton>
                </div>
            </form>
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