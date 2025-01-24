import { useTheme } from "../provider/ThemeProvider";
import { createStackNavigator } from "@react-navigation/stack";
import MainView from "../screens/MainViewScreen";
import PropsFormScreen from "../screens/PropsFormScreen";

function HomeStackNavigator() {
  const { theme } = useTheme();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        headerStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: theme.textColor,
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PropsForm"
        component={PropsFormScreen}
        options={{ title: "Props Form" }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
