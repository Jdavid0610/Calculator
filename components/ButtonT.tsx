import React, { FC, useEffect } from "react";
import { TouchableHighlight, Vibration } from "react-native";
import styles from "../constants/Styles";
import { Text } from "./Themed";

interface Props {
  onPress: (val: string | number) => void;
  text: number | string;
}

const ButtonT: FC<Props> = ({ onPress, text }) => {
  useEffect(() => {
    Vibration.vibrate(20);
  }, [onPress]);

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(text)}
      underlayColor="gray"
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

export default ButtonT;
