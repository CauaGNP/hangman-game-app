import { useState } from "react";
import { Alert, Text, View } from "react-native";
import Button from "../../components/Button";
import ButtonAlphabet from "../../components/ButtonAlphabet";

import Person from "../../components/Person";
import { styles } from "./styles";

export default function HangmanGame() {
  const [corretLetter, setCorretLetter] = useState<string[]>([]);
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState<number>(0);
  const [wordSplit, setWorldSplit] = useState<string[]>([]);

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const words = [
    "abacaxi",
    "computador",
    "elefante",
    "girassol",
    "montanha",
    "chaveiro",
    "livraria",
    "bicicleta",
    "pipoca",
    "relogio",
    "janela",
    "cachorro",
    "brinquedo",
    "escada",
    "telefone",
    "guitarra",
    "praia",
    "mochila",
    "sapato",
    "tomate",
    "navio",
    "oculos",
    "cadeira",
    "bola",
    "pente",
    "camiseta",
    "lousa",
    "borracha",
    "tesoura",
    "carro",
  ];

  function randomWord() {
    const selectWord = words[Math.floor(Math.random() * words.length)];
    const splitWord = selectWord.split("");
    insertValues(selectWord.length);
    return setWorldSplit(splitWord);
  }

  function displayWord() {
    Alert.alert("A palavra foi: ", `${wordSplit}`);
    setErrors(0);
    setWorldSplit([]);
    setDisabledLetters([]);
  }

  function insertValues(num: number) {
    setCorretLetter((prev) => {
      const newLetters = [...prev];
      for (let i = 0; i < num; i++) {
        newLetters[i] = "-";
      }
      return newLetters;
    });
  }

  function compareWords(e: string) {
    const newLetters = [...corretLetter];
    for (let i = 0; i < wordSplit.length; i++) {
      if (wordSplit[i] === e) {
        newLetters[i] = e;
      }
    }
    setCorretLetter(newLetters);

    if (!wordSplit.includes(e)) {
      setErrors(errors + 1);
    }

    setDisabledLetters((prev) => {
      if (prev === undefined) {
        return;
      }
      if (!prev.includes(e)) {
        return [...prev, e];
      }
      return prev;
    });
  }

  return (
    <View style={styles.container}>
      {wordSplit.length === 0 ? (
        <Button onPress={() => randomWord()} title="Começar" />
      ) : (
        <View>
          <View style={styles.hangman}>
            <Person errors={errors} />

            <View style={styles.word}>
              {wordSplit.map((_, index) => (
                <Text key={index}>
                  {corretLetter[index] === "-" ? "_" : corretLetter[index]}
                </Text>
              ))}
            </View>
          </View>

          <View>
            {errors === 6 ? (
              <Text style={styles.winLoserText}>Você perdeu!!</Text>
            ) : (
              <View style={styles.keyboard}>
                {alphabet.map((e, index) => (
                  <ButtonAlphabet
                    title={e}
                    key={`${index}Alphabet`}
                    onPress={() => compareWords(e)}
                    disabled={disabledLetters.includes(e)}
                    style={[disabledLetters.includes(e) && styles.disable]}
                  />
                ))}
              </View>
            )}
            <Button
              onPress={() => displayWord()}
              title={errors === 6 ? "Recomeçar" : "Desistir"}
            />
          </View>
        </View>
      )}
    </View>
  );
}
