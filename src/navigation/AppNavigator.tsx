import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../provider/ThemeProvider";
import MainView from "../screens/MainViewScreen";
import MemoriesView from "../screens/MemoriesScreen";
import Settings from "../screens/SettingsScreen";

type IconMapping = {
  [key: string]: {
    active: keyof typeof Ionicons.glyphMap;
    inactive: keyof typeof Ionicons.glyphMap;
  };
};

const ICON_MAPPING: IconMapping = {
  Home: {
    active: "home",
    inactive: "home-outline",
  },
  Memories: {
    active: "book",
    inactive: "book-outline",
  },
  Settings: {
    active: "settings",
    inactive: "settings-outline",
  },
};

const BottomTabs = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
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
        <BottomTabs.Screen name="Home" component={MainView} />
        <BottomTabs.Screen name="Memories" component={MemoriesView} />
        <BottomTabs.Screen name="Settings" component={Settings} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
