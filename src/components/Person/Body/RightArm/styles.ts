import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rightArm: {
    width: 1,
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    position: "absolute",
    right: 16,
    bottom: 6,
    transform: [{ rotate: "40deg" }],
  },
});
