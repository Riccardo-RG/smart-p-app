import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../provider/ThemeProvider";

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onChangeText,
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.primaryColor }]}>
      <MaterialIcons
        name="search"
        size={24}
        color={theme.textColor}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.textColor}
        style={[styles.input, { color: theme.textColor }]}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
