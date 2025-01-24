import MemoriesView from "../screens/MemoriesScreen";
import Settings from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "../provider/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import HomeStackNavigator from "./HomeStackNavigator";

type IconMapping = {
  [key: string]: {
    active: keyof typeof Ionicons.glyphMap;
    inactive: keyof typeof Ionicons.glyphMap;
  };
};

function TabNavigator() {
  const BottomTabs = createBottomTabNavigator();
  const ICON_MAPPING: IconMapping = {
    Home: { active: "home", inactive: "home-outline" },
    Alert: { active: "notifications", inactive: "notifications-outline" },
    Settings: { active: "settings", inactive: "settings-outline" },
  };
  const { theme } = useTheme();
  return (
    <BottomTabs.Navigator
      id={undefined}
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: theme.primaryColor },
        footerStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: theme.textColor,
        tabBarStyle: { backgroundColor: theme.primaryColor },
        tabBarActiveTintColor: theme.textColor,
        tabBarInactiveTintColor: theme.textColor,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            ICON_MAPPING[route.name][focused ? "active" : "inactive"];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTabs.Screen name="Home" component={HomeStackNavigator} />
      <BottomTabs.Screen name="Alert" component={MemoriesView} />
      <BottomTabs.Screen name="Settings" component={Settings} />
    </BottomTabs.Navigator>
  );
}

export default TabNavigator;
