import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import {styles} from './styles';

export const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./OIP.jpeg')}
      style={styles.container}
    >
      <Text style={styles.welcomeText}>How is your health today?</Text>
      <View style={styles.chatBubble}>
        <Text style={styles.calendarIcon}>📅</Text>
      </View>
    </ImageBackground>
  );
};