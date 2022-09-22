import React from 'react';
import {View, StyleSheet,Text, Pressable} from 'react-native';

const PrimaryButton = ({children, onPress}) => {
    
        
    
    return (
        
        <View style={styles.buttonoutercontainer}>
        <Pressable  style={styles.buttoninnercontainer} android_ripple={{color:'#640213' }} onPress={onPress}  >

            <Text style={styles.buttontext}>{children}</Text>
            </Pressable>


        </View>
        

    );
}

const styles = StyleSheet.create({
    buttonoutercontainer:{
        margin:4,
        borderRadius:28,
        overflow:'hidden',

    },
    buttoninnercontainer:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,


    },
    buttontext:{
        color:'white',
        textAlign:'center',
    }

})

export default PrimaryButton;
