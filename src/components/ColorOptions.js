import React from "react";
import SettingsContext from "../settings/SettingsContext";
import ColorSelector from "./ColorSelector";

const ColorOptions = () => (
  <SettingsContext.Consumer>
    {({ backgroundColor, textColor, setBackgroundColor, setTextColor }) => (
      <div style={styles.container}>
        <div style={styles.rowContainer}>
          <label style={styles.label}>Background color:</label>
          <ColorSelector
            style={styles.selector}
            value={backgroundColor}
            onChange={event => setBackgroundColor(event.target.value)}
          />
        </div>
        <div style={styles.rowContainer}>
          <label style={styles.label}>Text color:</label>
          <ColorSelector
            style={styles.selector}
            value={textColor}
            onChange={event => setTextColor(event.target.value)}
          />
        </div>
      </div>
    )}
  </SettingsContext.Consumer>
);

const styles = {
  container: {
    width: "300px",
    padding: "10px",
    display: "flex",
    flexDirection: "column"
  },
  rowContainer: {
    display: "flex",
    marginBottom: "10px"
  },
  label: {
    flex: "4",
    textAlign: "left"
  },
  selector: {
    flex: "2"
  }
};

export default ColorOptions;
