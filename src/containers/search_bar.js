import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };

        // Binding (this) to our component's this.FCN because
        // these fcns are being passed around as callbacks.
        // Because callbacks will be executed inside other fcns,
        // this almost always not be the correct this.
        // Therefore, we bind this context to it, so that
        // our declarations containing this executed
        // as we expect
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault(); 

        // Need to fetch weather data 
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({ searchTerm: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

//Allows us to access the action creator on our component's
// props (this.props.fetchWeather())
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null as first arg saying that this container doesn't care
// about app state. Serves as a placeholder because connect
// takes in the dispatch-to-props-mapper as the second arg
export default connect(null, mapDispatchToProps)(SearchBar);