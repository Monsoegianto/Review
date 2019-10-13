import React,{useState} from 'react';
import {
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';
import styles from '../styles/BotStyles';

function Bot() {
    const [mytext, setMytext] = useState('');
    return(
        <View style={styles.bot}>
            <TextInput
            placeholder="Enter Text Here"
            onChangeText={(text) => setMytext(text)}
            // mytext={mytext}
            />
            <Button
            title="Send"
            onPress={()=>{
                Alert.alert(
                    'Alert',
                    'You sent:'+ mytext,
                    [
                        {
                        text: 'OK', onPress:()=> console.log("OK")
                        }
                    ],
                    {cancelable: false}
                )
            }} />   
        </View>
    )
};

export default Bot;