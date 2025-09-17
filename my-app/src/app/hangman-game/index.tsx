import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import { useState } from 'react';
import Input from '../../components/Input';
import ButtonAlphabet from '../../components/ButtonAlphabet';

export default function HangmanGame() {
  const [corretLetter, setCorretLetter] = useState<string[]>([]); 
  const [disabledLetters, setDisabledLetters] = useState<string[]>();
  const [attempts, setAtempts] = useState<number>(0);
  // const [userLetter, setUserLetter] = useState<string>(); 
  const [wordSplit, setWorldSplit] = useState<string[]>([]);

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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

  function compareWords(e : string){
    const newLetters = [...corretLetter];
    for(let i = 0; i < wordSplit.length; i++ ){
        if(wordSplit[i] === e){
          newLetters[i] = e;
      }}
      setCorretLetter(newLetters);
      setAtempts(attempts + 1);
      setDisabledLetters(prev => {
        if(prev === undefined){
          return;
        }
        if (!prev.includes(e)) {
          return [...prev, e]; 
        }
        return prev;})
};
  
  return (
    <View style={styles.container}>
        { wordSplit.length === 0 ? 
        <Button onPress={() => randomWord()} title="Começar"/> :
        <View>
          <View>
            {/*Imagem da forca */}
          </View>
          <View>
            {wordSplit.map((_, index) => (
              <Text key={index}>{ corretLetter[index] === "-" ? "_" : corretLetter[index] }</Text>
            ))}
          </View>
          <View>
            {/* <Input onChangeText={(e) => {setUserLetter(e.toLowerCase())}} maxLength={1}/> */}
            <View>
              {alphabet.map((e,index) => (
                <ButtonAlphabet title={e} key={`${index}Alphabet`} onPress={() => compareWords(e)}  disabled={disabledLetters === undefined ? false : disabledLetters.includes(e)}/>
              ))}
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
