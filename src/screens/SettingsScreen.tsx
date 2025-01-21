import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useTheme } from "../provider/ThemeProvider";
import { ThemeSwitcher } from "../component/ThemeSwitcher";

const SettingsScreen: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.textColor }]}>
        This is the Settings Screen
      </Text>
      <ThemeSwitcher />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default SettingsScreen;
