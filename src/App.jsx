import React from "react";
import { DarkLight, ThemeProvider } from "./ContextApi/DarkLight";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
};

export default App;
