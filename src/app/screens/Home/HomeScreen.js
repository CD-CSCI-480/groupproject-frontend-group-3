import React from 'react';
import { View, Text, Button, ImageBackground, Image } from 'react-native';
import {styles} from './styles';

export const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./green-geometric.avif')}
      style={styles.container}
    >
      <View style={styles.welcomeComp}>
      <Image
      style={styles.image}  
      source={require("./Caduceus.png")}
      />
      <Text style={styles.welcomeText}>Welcome to SymRhongo</Text>
      <Text style={styles.welcomeText}>How is your health today?</Text>
      </View>
      <View style={styles.chatBubble}>
        <Text style={styles.calendarIcon}>📅</Text>
      </View>
    </ImageBackground>
  );
};