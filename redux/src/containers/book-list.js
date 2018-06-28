import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {selectBook} from '../actions/index.js';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    renderList() {
        return this.props.books.map(book => {
            return (
                <li onClick={() => this.onClick(book)} key={book.title} className="list-group-item">{book.title}</li>
            )
        });
    }

    onClick(book) {
        console.log('cliecked item with book: ' + book);
        this.props.selectBook(book)
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
      books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)