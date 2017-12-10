import React, { Component } from "react";

class VideoDetail extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>
    }

    const videoId = this.props.video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const options = {
      year: "numeric", month: "short", day: "numeric"
    };
    const postedAt = new Date(this.props.video.snippet.publishedAt).toLocaleDateString("en-US", options);

    console.log(this.props.video);

    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9 rounded-player">
          <iframe className="embed-responsive-item" src={videoUrl}></iframe>
        </div>
        <div className="details">
          <div className="video-title">{this.props.video.snippet.title}</div>
          <div className="video-posted-at">Added : {postedAt}</div>
          <hr />
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
