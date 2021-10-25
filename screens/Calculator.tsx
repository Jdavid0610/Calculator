import * as React from "react";
import { Text, View } from "../components/Themed";
import styles from "../constants/Styles";
import { Alert, Pressable, Vibration } from "react-native";

const Calculator = () => {
  const [inputs,setInputs] = React.useState<Array<string>>([]);

  const calculate = () => {
    Alert.alert("calclando...")
  }

  const input = (number?:number,operation?:string) => {
    if(number || number===0){
      setInputs((prev)=> [... prev, number!.toString()]);
    }else{
      if(operation==="AC"){
        setInputs([])
      }else if(operation==="="){
        calculate();
      }else{
        setInputs((prev)=> [... prev,operation!]);
      }
      
    }
    

    Vibration.vibrate(10);
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
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(9)}>
            <Text style={styles.text}>9</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(8)}>
            <Text style={styles.text}>8</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(7)}>
            <Text style={styles.text}>7</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(undefined,"AC")}>
            <Text style={styles.text}>AC</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(6)}>
            <Text style={styles.text}>6</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(5)}>
            <Text style={styles.text}>5</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(4)}>
            <Text style={styles.text}>4</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(undefined,"+")}>
            <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(3)}>
            <Text style={styles.text}>3</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(2)}>
            <Text style={styles.text}>2</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(1)}>
            <Text style={styles.text}>1</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(undefined,"-")}>
            <Text style={styles.text}>-</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(0)}>
            <Text style={styles.text}>0</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(undefined,"x")}>
            <Text style={styles.text}>x</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(undefined,"÷")}>
            <Text style={styles.text}>÷</Text>
        </Pressable>
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'black' : 'orange',
          },
          styles.button,
        ]} onPress={()=> input(undefined,"=")}>
            <Text style={styles.text}>=</Text>
        </Pressable>
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
