import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    alignItems: "center",
    justifyContent: "flex-start",
    borderLeftColor: "#000",
    borderLeftWidth: 1,
  },
  halfBorderTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: "50%",
    height: 1,
    backgroundColor: "#000",
  },
  trunk: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  legs: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
});
