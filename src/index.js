import React from 'react'; //Find 'react' module and set it to var React
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDZ36RufhuEDfHwrE8dfJCj9U601xUcjb0";

// Create new component - this will generate HTML

const App = () => {
    return (
        <div> 
            <SearchBar />
        </div>
    );
}

//Take component-generated HTML and place on page (in DOM)

ReactDOM.render(<App />, document.querySelector(".container"));