import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useTheme } from "../provider/ThemeProvider";

interface AddingPropsButtonProps {
  title: string;
  onPress: () => void;
}

const AddingPropsButton: React.FC<AddingPropsButtonProps> = ({
  title,
  onPress,
}) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.overlay, { backgroundColor: theme.secondaryColor }]}>
        <Button title={title} onPress={onPress} color={theme.textColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  overlay: {
    opacity: 0.95,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
  },
});

export default AddingPropsButton;
