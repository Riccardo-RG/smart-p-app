import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { ThemeProvider } from "./provider/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
