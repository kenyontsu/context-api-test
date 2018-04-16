import React, { Component } from "react";
import { settings } from "./";
import SettingsContext from "./SettingsContext";

class SettingsProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...settings,
      setBackgroundColor: this.setBackgroundColor,
      setTextColor: this.setTextColor
    };
  }

  setBackgroundColor = color => {
    this.setState({ backgroundColor: color });
  };

  setTextColor = color => {
    this.setState({ textColor: color });
  };

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;
