import React, { useState } from "react";

const { Provider, Consumer } = React.createContext();

function ThemeContext(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <Provider value={{ theme, toggleTheme }}>{props.children}</Provider>;
}

export { ThemeContext, Consumer as ThemeContextConsumer };
