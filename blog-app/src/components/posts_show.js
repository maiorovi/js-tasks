import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index.js';
import {Link} from 'react-router-dom';

class PostShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;

        this.props.fetchPost(id)
    }

    render() {
        const {post} = this.props;
        if (!post) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <div>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </div>
                <button className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}>
                    Delete post
                </button>
            </div>
        );

    }

    onDeleteClick() {
        const {id} = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }
}

function mapStateToProps({posts}, ownProps) {
    return {
        post : posts[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);