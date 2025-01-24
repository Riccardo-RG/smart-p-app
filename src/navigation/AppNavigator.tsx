import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "../provider/ThemeProvider";

import TabNavigator from "./TabNavigator";

const AppNavigator: React.FC = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
