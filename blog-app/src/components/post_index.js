import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index.js';
import PostPreview from './post.js';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class PostIndex extends Component {
    constructor(props) {
        super(props)
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const posts = this.props.posts;
        console.log(posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {(_.map(this.props.posts).map(this.renderPosts))}
                </ul>
            </div>
        )
    }

    renderPosts(post) {
        return (
            <li id="post" className="list-group-item" key={post.id}>
                <PostPreview title={post.title} content={post.content} id={post.id}/>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex)