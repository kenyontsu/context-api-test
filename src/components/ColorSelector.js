import React from "react";
import { COLORS } from "../settings";

const ColorSelector = ({ style, value, onChange }) => (
  <select style={style} value={value} onChange={onChange}>
    {COLORS.map(c => (
      <option key={c} value={c}>
        {c}
      </option>
    ))}
  </select>
);

export default ColorSelector;
