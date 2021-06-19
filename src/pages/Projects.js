import React, { Component } from "react";
import Card from "../components/Card";

class Projects extends Component {
  state = {
    image: "",
    link:"",
  };

  render() {
    return (
      <div>
        <h1 className="text-center">My Projects</h1>
        <Card image={this.state.image.link} handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}

export default Projects;
