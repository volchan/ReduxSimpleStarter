import React, { Component } from "react";
import VideoListItem from "./video_list_item";

class VideoList extends Component {
  render() {
    return(
      <ul className="col-md-4 list-group">
        {this.props.videos.map((video) => {
          return (
            <VideoListItem
              key={video.etag}
              onVideoSelect={this.props.onVideoSelect}
              video={video}
            />
          );
        })}
      </ul>
    );
  }
}

export default VideoList;
