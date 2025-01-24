import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../provider/ThemeProvider";

const FilterButton = ({ label, isActive, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive && { backgroundColor: theme.secondaryColor },
        isActive && { borderWidth: 0 },
        { borderColor: theme.textColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: theme.textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    margin: 1,
  },
  text: {
    fontSize: 16,
    marginTop: -5,
  },
});

export default FilterButton;
