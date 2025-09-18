import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  keyboard: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 8,
  },
  disable: {
    backgroundColor: "#9e9d9dff",
  },
  word: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 8,
  },
  hangman: {
    height: 150,
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 16,
  },
  winLoserText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
  },
});
