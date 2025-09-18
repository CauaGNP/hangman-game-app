import { Text, View } from "react-native";
import LinkButton from "../components/LinkButton";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem vindo ao Jogo da forca</Text>
      <View style={styles.viewButtons}>
        <LinkButton path="/rules" title="Regras" />
        <LinkButton path="/hangman-game" title="Jogo" />
      </View>
    </View>
  );
}
