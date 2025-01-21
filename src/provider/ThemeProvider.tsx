import React, { createContext, useContext, useState, ReactNode } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";

interface Theme {
  backgroundColor: string;
  textColor: string;
  barStyle: "light-content" | "dark-content";
  barColor?: string;
  primaryColor: string;
  secondaryColor?: string;
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
        backgroundColor: "#000",
        textColor: "#fff",
        barStyle: "dark-content",
        primaryColor: "#912122",
        secondaryColor: "#01B788",
      }
    : {
        backgroundColor: "#fff",
        textColor: "#000",
        barStyle: "light-content",
        primaryColor: "#7C4DFF",
        secondaryColor: "#01B788",
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
