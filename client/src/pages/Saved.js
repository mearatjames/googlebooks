import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import API from "../utils/API";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Content from "../components/Content"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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
  
   
    // handleDelete = index => {
    //   let data = this.state.books[index].volumeInfo
    //   let bookData = {
    //     title: data.title,
    //     authors: data.authors.join(', '),
    //     description: data.description,
    //     link: data.infoLink,
    //     image: data.imageLinks.thumbnail,
    //     year: data.publishedDate.slice(0, 4)
    //   }
    //   console.log(bookData)
    //   API.saveBook(bookData)
    // }
    
    render() {
      const { classes } = this.props;

      return (
        <React.Fragment>
          <Grid container justify="center">
            <Content 
            books={this.state.books}
            // handleDelete={this.handleDelete}
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