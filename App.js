import { StyleSheet, ImageBackground , SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Startgamescreen from './screens/Startgamescreen';
import GameOn from './screens/GameOn';
import { useState } from 'react';
import GameOver from './screens/GameOver';

export default function App() {
  // using states only to navigate through the different interfaces,,
  const [NumberProvided, setNumberProvided] = useState();
  const [gameisOver, setgameisOver] = useState(true);



  
  function pickedNumberhandler(pickednumber) {
    setNumberProvided(pickednumber)
    setgameisOver(false)
    
  }
  let screen=<Startgamescreen getNumber={pickedNumberhandler}/>
  // check if the number that was passed was valid or not.. 
  //render the gameOn component if the number passed..
  function gameoverHandler() {
    setgameisOver(true)
  }
  if (NumberProvided){
    screen=(<GameOn numberconverted={NumberProvided} gameoverHandler={gameoverHandler}/>);
  }
  

  if (gameisOver && NumberProvided ){
    screen=<GameOver />
  }
  return (
    <LinearGradient  colors={['#4e0329', "#ddb52f"]} style={styles.rootscreen}>
    <ImageBackground source={require('./assets/images/background.jpg') } 
    resizeMode="cover" style={styles.rootscreen}
    imageStyle={styles.backgroundImage}>
    <SafeAreaView style={styles.rootscreen}>
       {screen}

    </SafeAreaView>

    </ImageBackground>

    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  rootscreen:{
    
    flex:1,


  },
  backgroundImage:{
    opacity:0.25,
  }

  
});
