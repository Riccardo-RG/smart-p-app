import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../provider/ThemeProvider";
import { MaterialIcons } from "@expo/vector-icons";

interface SmartList {
  categories: string[];
}

const SmartList: React.FC<SmartList> = ({ categories }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      marginVertical: 8,
      borderRadius: 8,
      backgroundColor: theme.primaryColor,
    },
    itemText: {
      fontSize: 16,
      color: theme.textColor,
    },
  });

  const handlePress = (category: string) => {
    console.log(`Selected category: ${category}`);
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.itemText}>{item}</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={theme.textColor}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default SmartList;
