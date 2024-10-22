import { createContext, useState, use } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// creating a Component

const DarkLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);
  const backgroundColor = theme === "dark" ? "#1f2937" : "#ffffff";
  const color = theme === "dark" ? "#ffffff" : "#1f2937";

  return (
    <>
      <section className={"sec-class"} style={{ backgroundColor, color }}>
        <h1>Dark Light Mode Website</h1>
        <p>Hello!! My React v19 Fans 👍</p>
        <button onClick={handleToggleTheme}>
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </section>
    </>
  );
};

export { ThemeContext, ThemeProvider, DarkLight };
