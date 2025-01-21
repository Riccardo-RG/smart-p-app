import React, { useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../provider/ThemeProvider";
import { MaterialIcons } from "@expo/vector-icons";
import CategoriesList from "../component/CategoriesList";
import AddPropsButton from "../component/AddingPropsButton";
import SearchBar from "../component/SearchBar";

const MainView: React.FC = () => {
  const { theme } = useTheme();
  const categories = [
    "dreams",
    "Day memo",
    "sport",
    "Music",
    "Finance",
    "Health",
    "Work",
    "Study",
    "Travel",
    "Family",
    "Friends",
    "Love",
    "Hobbies",
    "Other",
  ];

  useEffect(() => {
    StatusBar.setBarStyle(theme.barStyle);
  }, [theme]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.title, { color: theme.textColor }]}>Props List</Text>

      <SearchBar />

      <View style={styles.listContainer}>
        <CategoriesList categories={categories} />
      </View>

      <AddPropsButton
        title="Add new prop +"
        onPress={() => console.log("CustomButton pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: 22,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default MainView;
