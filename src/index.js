import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search"

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "not here xD"

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      videos: []
    };
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: "mistermv"}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <SearchBar />
          </div>
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
