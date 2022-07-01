import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    Torch.switchState(toggle);
  //  console.log("Trocou estado do flash");
  }, [toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

  // Definindo a condicional para a lanterna ligada/desligada
  return (
    <View style={toggle ? style.containerON : style.containerOFF }>
      <TouchableOpacity onPress={handleChangeToggle}>
      
      <Image 
        style = {toggle 
          ? style.lightON
          : style.lightOFF}
        source = {toggle 
          ? require ('./assets/icons/eco-light.png') 
          : require ('./assets/icons/eco-light-off.png')}
          />
      <Image 
        style = {style.dioLogo}
        source = {toggle 
          ? require ('./assets/icons/logo-dio.png') 
          : require ('./assets/icons/logo-dio-white.png')}
          />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  containerOFF: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerON: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightON: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  lightOFF: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 150,
    width: 150,
    tintColor: 'white',
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 250,
    width: 250,
  },
  
});
