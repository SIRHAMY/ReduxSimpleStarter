import _ from 'lodash';
import React, {Component} from 'react'; //Find 'react' module and set it to var React
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyDZ36RufhuEDfHwrE8dfJCj9U601xUcjb0";

// Create new component - this will generate HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('surfboards');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videoObjs) => {
            this.setState({ 
                videos: videoObjs,
                selectedVideo: videoObjs[0]
            });
            // this.setState({ videos }) when videos:videos
        });
    }

    render() {

        const videoSearch = _.debounce((searchTerm) => { this.videoSearch(searchTerm) }, 300);

        return (
            <div> 
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    };
}

//Take component-generated HTML and place on page (in DOM)

ReactDOM.render(<App />, document.querySelector(".container"));