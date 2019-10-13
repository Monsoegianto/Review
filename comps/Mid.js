import React,{useState} from 'react';
import {View, Picker,Text} from 'react-native';
import styles from '../styles/MidStyles';

function Mid(){
const [midColor, setmidColor]= useState('#8a0423');

  return (
    <View style={[styles.cont,{backgroundColor:midColor}]}>
        <Picker
            style={styles.picker}
            selectedValue={midColor}
            onValueChange={(itemValue)=>setmidColor(itemValue)}
        >
            <Picker.Item label="rose" value="#8a0423" />
            <Picker.Item label="egg yolk" value="#f7a602" />
            <Picker.Item label="mint" value="#8fffe3" />
            <Picker.Item label="ocean" value="#1f4a94" />
        </Picker>
    </View>
  )
}

export default Mid;