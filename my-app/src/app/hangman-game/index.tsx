import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { useState } from 'react';
import Input from '../../components/Input';

export default function HangmanGame() {
  const [attempts, setAtempts] = useState(0);
  const [userWord, setUserWord] = useState<string>();
  const [wordSplit, setWorldSplit] = useState<string[]>([]);

  const words = [
    "abacaxi", "computador", "elefante", "girassol", "montanha", "chaveiro", "livraria", "bicicleta", "pipoca",
    "relogio", "janela", "cachorro", "brinquedo", "escada", "telefone"
  ];

  function randomWord(){
    const selectWord = words[Math.floor((Math.random() * words.length))];
    const splitWord = selectWord.split("");
    return setWorldSplit(splitWord);
  }

  function compareWords(){
    
  }

  function displayWord(){
    Alert.alert("A palavra foi: ", `${wordSplit}`);
    setAtempts(0);
    setWorldSplit([]);
  }

  return (
    <View style={styles.container}>
        { wordSplit.length === 0 ? 
        <Button onPress={() => randomWord()} title="Começar"/> :
        <View>
          <View>
            {/* {Vai mostrar a palavra} */}
          </View>
          <View>
            <Input onChangeText={(e) => setUserWord(e)} maxLength={1}/>
            <View>
              <Button onPress={() => compareWords()} title="Enviar"/>  
              <Button onPress={() => displayWord()} title="Mostrar"/>
            </View> 
          </View> 
 
        </View>
        }
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
