import { Stack } from "expo-router";

export default function RootLayout(){
    return <Stack>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
        <Stack.Screen name="hangman-game/index" options={{ title: 'Jogo da Forca' }} />
        <Stack.Screen name="rules/index" options={{ title: 'Regras' }} />
    </Stack>
}