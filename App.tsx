import React, { Fragment } from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { SignIn } from './src/Signin';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';

export default function App(){

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    //37:08
  <Background>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <SignIn />
  </Background>
  );
}