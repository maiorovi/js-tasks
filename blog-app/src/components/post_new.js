import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from "../actions/index.js";

class PostNew extends Component {
    constructor(props) {
        super(props);

        this.renderTagsField = this.renderTagsField.bind(this);
        this.renderTitleField = this.renderTitleField.bind(this);
        this.renderContentField = this.renderContentField.bind(this);
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <h1>PostsNew!</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="title"
                        label="Title"
                        component={this.renderTitleField} />
                    <Field
                        name="categories"
                        label="Categories"
                        component={this.renderTagsField} />
                    <Field
                        name="content"
                        label="Post Content"
                        component={this.renderContentField} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </form>
            </div>
        )
    }

    renderContentField(field) {
        return this.renderField(field)
    }

    renderTagsField(field) {
        return  this.renderField(field)
    }

    renderTitleField(field) {
        return this.renderField(field)
    }

    renderField(field) {
        const {meta : {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type="text" {...field.input} className="form-control"/>
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        )
    }
}

function validate(values) {
    console.log(values);
    const errors = {};

    if(!values.title || values.title.length < 3) {
        errors.title='Enter a title!'
    }

    if(!values.categories) {
        errors.categories='Enter a categories!'
    }

    if(!values.content) {
        errors.content='Enter a content!'
    }
    //if errors is empty then form is fine to submit
    return errors;
}


export default reduxForm({
    form: 'PostsNewForm',
    validate: validate
})(
    connect(null, {createPost})(PostNew)
);