import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../provider/ThemeProvider";

const MemoriesScreen: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.textColor }]}>
        This is the Memories Screen
      </Text>
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

export default MemoriesScreen;
