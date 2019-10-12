import React from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';
import Top from '../comps/Top';

function Main(){
    return(
        <View style={styles.main} >
            <View style={styles.boxes}><Top/></View>
            <View style={styles.boxes}></View>
            <View style={styles.boxes}></View>
        </View>

    )
}

export default Main;