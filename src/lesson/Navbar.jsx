import React from "react";

import { ThemeContextConsumer } from "./ThemeContext";

export default function Navbar() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="row">
          <div>
            <strong>Class Context App</strong>
          </div>
          <button onClick={context.toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
