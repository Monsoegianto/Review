import React, {useState} from 'react';
import {View,Text, Switch} from 'react-native';
import styles from '../styles/TopStyles';

function Top(){
    //const acts like the proxy
    const [showTheme, setShowTheme] = useState(false);
    // const [showText, setShowText] = useState(false);

    //Theme
    var theme = null
    //null because u want to start with nothing first
    if (showTheme === true){

        theme = (
        <View style={[styles.top,{backgroundColor:'#000'}]}>
            <Switch 
            value ={showTheme}
            onValueChange ={(itemValue, itemIndex) => setShowTheme(itemValue)}>
            </Switch> 
            <Text style={{color: '#fff'}}>Dark Mode</Text>
        </View>
    )
}

if (showTheme ===false){

    theme = (
    <View style={[styles.top,{backgroundColor:'#fff'}]}>
        <Switch 
        value ={showTheme}
        onValueChange ={(itemValue, itemIndex) => setShowTheme(itemValue)}>
        </Switch>
            
        <Text style={{color: '#000'}}>Day Mode</Text>
    </View>
)
}


    return(
        <View>
        {theme}
        </View>

    )
}



export default Top;