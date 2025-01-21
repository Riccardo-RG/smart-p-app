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
        barStyle: "light-content",
        primaryColor: "#912122",
      }
    : {
        backgroundColor: "#fff", // Sfondo chiaro
        textColor: "#000", // Testo scuro
        barStyle: "dark-content",
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

/* 
  NOTA: Mantengo lo StyleSheet anche se qui non viene utilizzato, 
  per conservare fedelmente tutte le righe del codice originale.
*/
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
});
