import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import { useTheme } from "../provider/ThemeProvider";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation
import AddPropsButton from "../component/AddingPropsButton";
import SearchBar from "../component/SearchBar";
import FilterButton from "../component/FilterButton";
import SmartList from "../component/CategoriesList";

const MainView: React.FC = () => {
  const { theme } = useTheme();

  type RootStackParamList = {
    PropsForm: undefined;
    // add other routes here
  };

  type MainViewScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "PropsForm"
  >;

  const navigation = useNavigation<MainViewScreenNavigationProp>(); // Usa l'hook useNavigation
  const [activeFilter, setActiveFilter] = useState("Categorie");

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

  const propsList = [
    "ei mom",
    "work sentiment",
    "diary",
    "music text",
    "finance count",
    "health",
    "work",
    "study",
    "travel",
    "family",
    "friends",
  ];

  useEffect(() => {
    StatusBar.setBarStyle(theme.barStyle);
  }, [theme]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.header}>
        <Text
          style={[{ color: theme.textColor, fontSize: 24, fontWeight: "bold" }]}
        >
          Props List
        </Text>
        <View style={styles.filterButton}>
          <FilterButton
            label="Categorie"
            isActive={activeFilter === "Categorie"}
            onPress={() => setActiveFilter("Categorie")}
          />
          <FilterButton
            label="All props"
            isActive={activeFilter === "All props"}
            onPress={() => setActiveFilter("All props")}
          />
        </View>
      </View>

      <SearchBar />

      <View style={styles.listContainer}>
        {activeFilter === "Categorie" ? (
          <SmartList categories={categories} />
        ) : (
          <SmartList categories={propsList} />
        )}
      </View>

      <AddPropsButton
        title="Add new prop +"
        onPress={() => navigation.navigate("PropsForm")} // Usa navigation da useNavigation
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
  header: {
    marginTop: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  filterButton: {
    display: "flex",
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default MainView;
