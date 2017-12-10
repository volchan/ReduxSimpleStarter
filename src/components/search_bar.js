import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      term: ""
    };
  }

  render() {
    return(
      <div className="input-group search-bar">
        <span className="input-group-addon" id="basic-addon1">
          <i className="fas fa-search"></i>
        </span>
        <input
          className="form-control"
          value={this.state.term}
          onChange={event => this.handleInputChange(event.target.value)}
        />
      </div>
    );
  }

  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
