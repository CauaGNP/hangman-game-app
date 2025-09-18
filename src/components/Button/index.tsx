import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export default function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.contain}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
