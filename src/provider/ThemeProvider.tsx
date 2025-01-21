import React, { createContext, useContext, useState, ReactNode } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";

interface Theme {
  backgroundColor: string;
  textColor: string;
  barStyle: "light-content" | "dark-content";
  barColor?: string;
  primaryColor: string;
}

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme: Theme = isDarkMode
    ? {
        backgroundColor: "#000", // Sfondo scuro
        textColor: "#fff", // Testo chiaro
        barStyle: "dark-content",
        primaryColor: "#912122",
      }
    : {
        backgroundColor: "#fff",
        textColor: "#000",
        barStyle: "light-content",
        primaryColor: "#7C4DFF",
      };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useTheme deve essere utilizzato all'interno di ThemeProvider"
    );
  }
  return context;
};
