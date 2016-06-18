import React, {Component} from 'react'; //Find 'react' module and set it to var React
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyDZ36RufhuEDfHwrE8dfJCj9U601xUcjb0";

// Create new component - this will generate HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videoObjs) => {
            this.setState({ videos: videoObjs });
            // this.setState({ videos }) when videos:videos
        });
    }

    render() {
        return (
            <div> 
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };
}

//Take component-generated HTML and place on page (in DOM)

ReactDOM.render(<App />, document.querySelector(".container"));