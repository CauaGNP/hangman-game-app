import { View } from "react-native";
import Body from "./Body";
import { styles } from "./styles";

export default function Person({ errors }: { errors: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfBorderTop} />
      {errors >= 1 ? <Body.Head /> : undefined}

      <View style={styles.trunk}>
        {errors >= 3 ? <Body.LeftArm /> : undefined}
        {errors >= 2 ? <Body.Trunk /> : undefined}
        {errors >= 4 ? <Body.RightArm /> : undefined}
      </View>

      <View style={styles.legs}>
        {errors >= 6 ? <Body.LeftLeg /> : undefined}
        {errors >= 5 ? <Body.RightLeg /> : undefined}
      </View>
    </View>
  );
}
