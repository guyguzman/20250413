import React from "react";
import "./App.css";
import { Theme } from "@radix-ui/themes";

const App = () => {
  return (
    <Theme>
      <div className="app">
        <h1>Welcome to My React Vite App</h1>
        <p>This is a simple application built with React and Vite.</p>
      </div>
    </Theme>
  );
};

export default App;
