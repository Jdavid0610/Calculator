import * as React from "react";
import { Text } from "./Themed";
import { ButtonType } from "../types";
import styles from "../constants/Styles";
import { TouchableOpacity, Vibration } from "react-native";

const ButtonT = (props: ButtonType) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => Vibration.vibrate(10)}
    >
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonT;
