import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  leftLeg: {
    width: 1,
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    position: "absolute",
    left: 12,
    bottom: 6,
    transform: [{ rotate: "-30deg" }],
  },
});
