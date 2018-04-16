import React from "react";
import { settings } from "./";

const SettingsContext = React.createContext({
  ...settings,
  setBackgroundColor: () => {},
  setTextColor: () => {}
});

export default SettingsContext;
