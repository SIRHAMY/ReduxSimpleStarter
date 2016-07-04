import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault(); 

        // Need to fetch weather data 
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