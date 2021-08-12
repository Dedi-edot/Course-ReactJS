import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

export default function MainContent(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`content ${context.theme}`}>
          <h1>Welcome to may App</h1>
          <p>Use Context API to share data between components.</p>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
