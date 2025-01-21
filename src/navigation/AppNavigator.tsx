import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainView from "../MainView";
import { useTheme } from "../provider/ThemeProvider";

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined}>
        <Stack.Screen
          name="Main"
          component={MainView}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: theme.primaryColor,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
