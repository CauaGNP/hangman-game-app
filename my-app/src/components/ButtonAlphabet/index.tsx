import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title : string
} 

export default function ButtonAlphabet( { title, ...rest }: Props){
    return(
        <TouchableOpacity {...rest}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}