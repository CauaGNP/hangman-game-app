import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const words = [
  "abacaxi", "computador", "elefante", "girassol", "montanha", "chaveiro", "livraria", "bicicleta", "pipoca",
 "relógio", "janela", "cachorro", "brinquedo", "escada", "telefone"
];

export default function HangmanGame() {
  return (
    <View style={styles.container}>
      <View>
      {/* {Vai mostrar a palavra} */}
      </View>  

      <View>
      {/* 'Botao (começar,quando ele clicar em começar vai aparecer um input e dois botões (mostrar e enviar) )' */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
