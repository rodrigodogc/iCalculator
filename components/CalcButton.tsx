import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface CalcButtonProps {
  value: string;
  type: string;
}

export default function CalcButton({value, type}: CalcButtonProps) {
  return (
    <>
      <Pressable style={styles.numberButton}>
      <Text style={styles.textNumbButton}>    {value}    </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  numberButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "white",
    borderRadius: 9,
    elevation: 1,
  },
  textNumbButton: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  },
  specialButton: {

  },

});
