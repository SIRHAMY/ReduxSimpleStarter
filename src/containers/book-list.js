import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map( (book) => {
            return(
                <li 
                    key={book.title} 
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned from here is props in BookList
    return {
        books: state.books
    };
}

// Anything returned from this fcn will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, result should be passed
    //to all of our reducers

    //selectBook is a fcn - the action from index.js
    //TAkes result of selectBook and runs it through reducers using dispatch
    return bindActionCreators({selectBook: selectBook}, dispatch);
}


// Promote BookList from a component to a container
// It needs to know about new dispatch method, selectBook.
// Make it available as a prop.
// For more info: react-redux docs
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 