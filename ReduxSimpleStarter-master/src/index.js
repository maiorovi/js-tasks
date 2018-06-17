import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyBshlqrQkTvGyQckdnxIKoKaeVvQR3ibFM';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos : [] };
        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
           this.setState({ videos })
        });
    }

    render() {
        return (
            <div>
                <div>Hi</div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));