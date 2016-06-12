import React from 'react'; //Find 'react' module and set it to var React
import ReactDOM from 'react-dom';

// Create new component - this will generate HTML

const App = () => {
    return <div> Hi </div>;
}

//Take component-generated HTML and place on page (in DOM)

ReactDOM.render(<App />, document.querySelector(".container"));