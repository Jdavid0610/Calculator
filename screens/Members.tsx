import * as React from 'react';
import { Text, View } from '../components/Themed';
import styles from '../constants/Styles';

const Members = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Julian David Ortiz Alviar</Text>
      <Text style={styles.subtitle}>Santiago Andres Castro Cruz</Text>
      <Text style={styles.subtitle}>Juan Diego Bastidas</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

export default Members;
