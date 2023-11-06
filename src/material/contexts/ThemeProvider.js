import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const UpdateThemeContext = createContext();

export function useTheme() {
  return [useContext(ThemeContext), useContext(UpdateThemeContext)];
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark((prevDark) => !prevDark);
  }

  return (
    <>
      <ThemeContext.Provider value={dark}>
        <UpdateThemeContext.Provider value={toggleDark}>
          {children}
        </UpdateThemeContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
