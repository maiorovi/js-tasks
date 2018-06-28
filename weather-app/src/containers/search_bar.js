import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term : ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input onChange={this.onInputChange}
                       className="form-control"
                       placeholder="Get a five day forecast in you favorite cities"
                       value={this.state.term}   />
                <span className="input-group-btn" >
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }

    onInputChange(event) {
        this.setState({term : event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
        // We need to go and fetch data
    }
}

function mapDispathToProps(dispatch) {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch)
}


export default connect(null, mapDispathToProps)(SearchBar);