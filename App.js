import Antibiotics from './src/app/Antibiotics';
import MenuScreen from './src/app/(tabs)/menu/menu';
import { RDisplay } from './src/app/screens/Reminders/RDisplay';
import { HomeScreen } from './src/app/screens/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor:"#003006"
      }}
      >
        
        <Tab.Screen name='Home' component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-account" color={color} size={size} />),
          }}
        />

        <Tab.Screen name='Reminders' component={RDisplay} 
        options={{
          tabBarLabel: 'Reminders',
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-clock-outline" color={color} size={size} />),
        }}
        />

        <Tab.Screen name='Disease' component={MenuScreen}
        options={{
          tabBarLabel: 'Disease',
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bacteria" color={color} size={size} />),
        }}
        />

        <Tab.Screen  name='Antibiotics' component={Antibiotics}
        options={{
          tabBarLabel: 'Antibiotics',
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="pill" color={color} size={size} />),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}