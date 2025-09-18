import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function ButtonAlphabet({
  title,
  onPress,
  disabled,
  style,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
