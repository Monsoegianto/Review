import React from 'react';
import {View,Text} from 'react-native';
import Mid from './Mid';
import styles from '../styles/MainStyles';

function Main(){
  return (
    <View style={styles.main}>
        <View style={styles.boxes}></View>
        <View style={styles.boxes}><Mid /></View>
        <View style={styles.boxes}></View>
    </View>
  )
}

export default Main;