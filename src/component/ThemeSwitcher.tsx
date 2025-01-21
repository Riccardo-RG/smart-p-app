import React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";
import { useTheme } from "../provider/ThemeProvider";

export const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <View style={styles.switchContainer}>
      <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode((prev) => !prev)}
      />
    </View>
  );
};

/* Stesse proprietà dello StyleSheet già mostrate 
   in precedenza, ma replicate per fedeltà di codice. */
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
});
