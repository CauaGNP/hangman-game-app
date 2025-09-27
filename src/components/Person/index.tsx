import { View } from "react-native";
import Body from "./Body";
import { styles } from "./styles";

export default function Person({ errors }: { errors: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfBorderTop} />
      {errors >= 1 && <Body.Head />}

      <View style={styles.trunk}>
        {errors >= 3 && <Body.LeftArm />}
        {errors >= 2 && <Body.Trunk />}
        {errors >= 4 && <Body.RightArm />}
      </View>

      <View style={styles.legs}>
        {errors >= 6 && <Body.LeftLeg />}
        {errors >= 5 && <Body.RightLeg />}
      </View>
    </View>
  );
}
