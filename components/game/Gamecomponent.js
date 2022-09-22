import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Gamecomponent = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:"#ddb52f",
        padding:24,
        borderRadius:10,
        margin:24,
        alignItems:'center',
        justifyContent:'center',


    },
    numberText:{
        color:"#ddb52f",
        fontSize:36,
        fontWeight:'bold',
    },
})

export default Gamecomponent;
