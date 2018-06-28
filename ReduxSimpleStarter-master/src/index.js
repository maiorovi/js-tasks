import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_details';
import _ from 'lodash';

const API_KEY = 'AIzaSyBshlqrQkTvGyQckdnxIKoKaeVvQR3ibFM';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos : [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0] })
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={video => this.setState({selectedVideo: video})} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));