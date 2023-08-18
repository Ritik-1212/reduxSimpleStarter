import React, { Component } from "react";
import _ from "lodash";
import ReactDOM  from "react-dom";
import SearchBar from "./components/search_bar";
import YTsearch from "youtube-api-search";
import VideoFiles from "./components/video_files";
import VideoDetails from "./components/video_details";

const API_KEY = "AIzaSyDkh4BeQYYN02KB-E1UCga58mAWLtA43Nw";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
             videos: [],
             selectedVideo: null
        };
        
       this.videoSearch("surfBoards");
    }

    videoSearch(term){
        YTsearch({key: API_KEY, term: term}, (videos) =>{
            this.setState({videos : videos, selectedVideo: videos[0]});
        });
    }

    render(){
        return (<div>
            <SearchBar onVideoSearchTerm = {searchTerm => this.videoSearch(searchTerm)} />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoFiles 
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos} />
        </div>
        );
    }
   
}

ReactDOM.render(<App />, document.querySelector(".container"));