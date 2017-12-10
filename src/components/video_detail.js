import React, { Component } "react";

class VideoDetail extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }

  render() {
    const videoId = this.props.video.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoUrl}></iframe>
        </div>
        <div className="details">
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
