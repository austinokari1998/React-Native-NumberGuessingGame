import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Title = ({childtitle}) => {
    return (
        <View>
            <Text style={styles.title}>{childtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#ddb52f',
        borderRadius:10,
        padding:12,




    },

})

export default Title;
