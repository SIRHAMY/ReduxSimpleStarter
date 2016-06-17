
import React, {Component} from 'react';

//Class-based component - must have a defined render method
class SearchBar extends Component {
    constructor(props) {
        //Call parent constructor
        super(props);

        //Initialize state
        this.state = { searchTerm: '' };
    }

    render() {
        return (
            <div>
                <input 
                  value={this.state.searchTerm}
                  onChange={(event) => this.setState({ searchTerm: event.target.value })} />
            </div>
        );
    }

    /*
    onInputChange(event) {
        console.log(event.target.value);
    }
    */
}


//Functional component
/*
const SearchBar = () => {
    return <input />;
};
*/

export default SearchBar;