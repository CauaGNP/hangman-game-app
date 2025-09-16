import { Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your appaaaa!</Text>
      
      <View style={styles.viewButtons}>
        <LinkButton path='/rules' title='Regras'/>
        <LinkButton path='/hangman-game' title='Jogo'/>
      </View>
      
    </View>
  );
}