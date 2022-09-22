import React from 'react';
import {View,
     StyleSheet,
     Text
    ,SafeAreaView,
    Alert
} from 'react-native';
import Gamecomponent from '../components/game/Gamecomponent';
import Title from '../components/Title';
import { useState , useEffect} from 'react';
import PrimaryButton from '../components/PrimaryButton';

 // a handler function that generatees randomm numbers in specified parameters..
function generateRandomNumber(min, max, exclude) {
    const rands=Math.floor(Math.random()*(max-min))+min
    if (rands===exclude){
        generateRandomNumber(min,max,exclude)
    } else{
    return rands
    }
    
}
let minval=1;
let maxval=100
const GameOn = ({numberconverted, gameoverHandler}) => {
    
    const initialnumber=generateRandomNumber(1,100,numberconverted)
    const [currentGuess, setcurrentGuess] = useState(initialnumber);

    useEffect(() => {
        if (currentGuess === numberconverted){
            gameoverHandler()
        }    
    }, [currentGuess, numberconverted,gameoverHandler]);

   const childtitle='Computer Guessed ';
    function guessAgain(direction) {
        //check that the instruction given to the + or - is really valid. 
        //should not guess the number to be lesser and yet it is greater than the expected..
        if ((direction==='lower' && currentGuess<numberconverted ) 
        || (direction==='greater' && currentGuess>numberconverted)){
            Alert.alert("don't lie ", 'You know that is wrong.. ',[{Text:'Sorry', style: 'cancel' }],)
            return;
        }
        if (direction==='lower'){
            maxval=currentGuess

        }
        else {
            minval=currentGuess +1 
        }
        const newRndNumber= generateRandomNumber(minval,maxval,numberconverted)
        setcurrentGuess(newRndNumber)
        
    }
    
    return (
        <View style={styles.gamescreen}>
            <Title childtitle={childtitle}/>
           <Gamecomponent>{currentGuess}</Gamecomponent>
           <View style={styles.textview}>         
             <Text style={styles.texteditor}>Higher or Lower</Text>
            </View>
           <View >
           <PrimaryButton onPress={guessAgain.bind(this, 'lower')}>-</PrimaryButton>
           <PrimaryButton onPress={guessAgain.bind(this, 'greater')}>+</PrimaryButton>
           </View>
          
            <View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gamescreen:{
        padding:24,
        flex:1,

    },
    texteditor:{
        color:'white',
        fontSize:22,
        
    },

    textview:{
        borderRadius:20,
        borderColor:'#ddb52f',
        alignItems:'center',
        borderWidth:2,

    }
    
})

export default GameOn;
