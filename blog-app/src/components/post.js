import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PostPreview extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {title: props.title, content: props.content, id: props.id}
    }

    render() {
        return (<div>
            <h1><Link to={`posts/${this.state.id}`}>{this.state.title}</Link></h1>
            <p>{this.state.content}</p>
        </div>)
    }
}