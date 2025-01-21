import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useTheme } from "../provider/ThemeProvider";

const MainView: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    StatusBar.setBarStyle(theme.barStyle);
  }, [theme]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={{ color: theme.textColor }}>SMART P</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainView;
