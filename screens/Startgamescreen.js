import React from 'react';
import {View,TextInput, StyleSheet, Text,Alert, SafeAreaView} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Title from '../components/Title';
const Startgamescreen = ({getNumber}) => {
    const [numberValue, setnumberValue] = useState('');
    function numberinputHandler(enteredValue) {
        setnumberValue(enteredValue)
        
    }
    function resetInputHandler() {
        setnumberValue('')
    }

    function confirmHandler() {
        // I will write the logic that will handle the input number..
        //convert to number, check if its valid, below 100 and above 0.
        //alert the user if this is not true.
        const numberconverted=parseInt(numberValue)

        //is number converted..
        if (isNaN(numberconverted) || numberconverted<=0 || numberconverted>99){
            //alert.
            Alert.alert('Invalid number !', 'input value has to be a number and has to be between 0 and 99 ', 
            [{text:'Cool', style:'destructive', onPress: resetInputHandler}])
            return;
        }
        
        getNumber(numberconverted)
    }
    const title='Guess Number Game '
    return (
        <View style={styles.rootcontainer}>
        
        <Title  childtitle={title}/>
        
        <View style={styles.inputconntainer}>
        <Text style={styles.Instructiontext}>Enter Number </Text>

            <TextInput style={styles.goalinput} maxLength={2} 
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize='None'
            onChangeText={numberinputHandler}
            value={numberValue}
            />
            <View style={styles.buttonscontainer}>
               <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>reset</PrimaryButton>
               </View> 
                <View style={styles.buttonContainer}> 
                    <PrimaryButton onPress={confirmHandler}>confirm</PrimaryButton>
                </View>


            </View>
            
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginTop:150,
        alignItems:'center',

    },
    Instructiontext:{
        color:'white',
        fontSize:25,
    },

    inputconntainer:{
        justifyContent:'center',
        alignItems:'center',

        padding: 16,
        marginHorizontal:24,
        marginTop: 30,
        backgroundColor:'#4e0329',
        borderRadius:8,
        elevation:18,
        shadowColor:'black',
        shadowOffset: {width:0 , height:2 },
        shadowRadius:6,
        shadowOpacity:0.25,


    },
    goalinput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth: 2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',


    },
    buttonscontainer:{
        flexDirection:'row',

    },
    buttonContainer:{
        flex:1
    }
})

export default Startgamescreen;
