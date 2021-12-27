import React, { Component } from "react";

class Navigation extends Component {
  state = {
    showContactPopup: false,
  };

  handleToggleContactPopup = () => {
    this.setState({ showContactPopup: true });
  };
  render() {
      // set in config 
    const categories = ["About", "Projects", "Skills", "Experience"];
    return (
      <div className="nav-container">
        {categories.map((category, i) => (
          <a className="nav-container__link" href={`#${category.toLowerCase()}`} key={i}>
            {category}
          </a>
        ))}
        <span className="nav-container__link" onClick={this.handleToggleContactPopup}>{"Contact"}</span>
      </div>
    );
  }
}

export default Navigation;
