import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { useState } from 'react';
import Input from '../../components/Input';

export default function HangmanGame() {
  const [corretLetter, setCorretLetter] = useState<string[]>([]); 
  const [prevLetters, setPrevLetters] = useState<string[]>([]); 
  const [attempts, setAtempts] = useState<number>(0);
  const [userLetter, setUserLetter] = useState<string>(); 
  const [wordSplit, setWorldSplit] = useState<string[]>([]);

  const words = [
    "abacaxi", "computador", "elefante", "girassol", "montanha", "chaveiro", "livraria", "bicicleta", "pipoca",
    "relogio", "janela", "cachorro", "brinquedo", "escada", "telefone"
  ];

  function randomWord(){
    const selectWord = words[Math.floor((Math.random() * words.length))];
    const splitWord = selectWord.split("");
    insertValues(selectWord.length);
    return setWorldSplit(splitWord);
  }

  function displayWord(){
    Alert.alert("A palavra foi: ", `${wordSplit}`);
    setAtempts(0);
    setWorldSplit([]);
  }

  function insertValues(num : number){
    setCorretLetter(prev => {
      const newLetters = [...prev];
      for(let i = 0; i < num; i++){
        newLetters[i] = "-"; 
      }
      return newLetters;
    })
  }

  function compareWords(){
    const newLetters = [...corretLetter];
    for(let i = 0; i < wordSplit.length; i++ ){
        if(wordSplit[i] === userLetter){
          newLetters[i] = userLetter;
      }}
      setCorretLetter(newLetters);
  }

  return (
    <View style={styles.container}>
        { wordSplit.length === 0 ? 
        <Button onPress={() => randomWord()} title="Começar"/> :
        <View>
          <View>
            {wordSplit.map((_, index) => (
              <Text key={index}>{ corretLetter[index] === "-" ? "_" : corretLetter[index] }</Text>
            ))}
          </View>
          <View>
            <Input onChangeText={(e) => {setUserLetter(e.toLowerCase())}} maxLength={1}/>
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
