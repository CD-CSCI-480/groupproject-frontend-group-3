import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Antibiotics from './src/app/Antibiotics';
import MenuScreen from './src/app/(tabs)/menu/menu';
import DiseaseScreen from './src/app/(tabs)/[disease]';
import { Reminders } from './src/app/screens/Reminders';
import { HomeScreen } from './src/app/screens/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    // <DiseaseScreen/>
    // <Antibiotics />
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Reminders' component={Reminders} />
        <Tab.Screen name='Disease' component={MenuScreen}/>
        <Tab.Screen  name='Antibiotics' component={Antibiotics}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "blue",
    fontWeight: "bold",
  },
});
