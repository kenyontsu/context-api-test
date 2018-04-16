import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SettingsProvider from "./settings/SettingsProvider";
import SettingsContext from "./settings/SettingsContext";
import ColorOptions from "./components/ColorOptions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SettingsProvider>
          <AppHeader />
          <Content />
        </SettingsProvider>
      </div>
    );
  }
}

const AppHeader = () => (
  <SettingsContext.Consumer>
    {({ backgroundColor, textColor }) => {
      return (
        <header
          className="App-header"
          style={{
            backgroundColor,
            color: textColor
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Context API</h1>
          <p>You can change this header colors with these options:</p>
        </header>
      );
    }}
  </SettingsContext.Consumer>
);

const Content = () => (
  <div style={styles.contentContainer}>
    <ColorOptions />
  </div>
);

const styles = {
  contentContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
};

export default App;
