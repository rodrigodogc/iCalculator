import CalcButton from "@/components/CalcButton";
import { HelloWave } from "@/components/Presets/HelloWave";
import { TabActions } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={styles.mainApp}>
      <Text style={styles.texts}>Calculadora</Text>
      <CalcButton value="1" type="number"/>
    </View>
  );
}

const styles = StyleSheet.create ({
  texts: {
    color: "white"
  },
  mainApp: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#171717",
  }
});