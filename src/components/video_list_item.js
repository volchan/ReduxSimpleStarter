import React, { Component } from "react";

class VideoListItem extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }

  render () {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const videoTitle = this.props.video.snippet.title;
    return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">{videoTitle}</div>
        </div>
      </li>
    )
  }
}

export default VideoListItem;
