import * as React from "react";
import { Text, View } from "../components/Themed";
import styles from "../constants/Styles";
import ButtonT from "../components/ButtonT";

const Calculator = () => {
  const [inputs, setInputs] = React.useState<string>("");
  const cells = [9, 8, 7, "AC", 6, 5, 4, "+", 3, 2, 1, "-", 0, "*", "/", "="];

  const calculate = () => setInputs(new Function("return " + inputs)());

  const handleInput = (val: string | number) => {
    if (typeof val === "number") {
      setInputs(inputs + val.toString());
    } else {
      if (val === "AC") {
        setInputs("");
      } else if (val === "=") {
        calculate();
      } else {
        setInputs(inputs + val);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.result}>
        <Text style={styles.resultText}>{inputs}</Text>
      </View>
      <View style={styles.calculator}>
        {cells.map((cell, key) => (
          <ButtonT key={key} onPress={handleInput} text={cell} />
        ))}
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

export default Calculator;
