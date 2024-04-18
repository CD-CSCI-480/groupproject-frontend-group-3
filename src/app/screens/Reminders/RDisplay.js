import React from 'react';
import { Reminders } from './pages/Reminders';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ReminderMenu } from './pages/ReminderMenu';

const Stack = createNativeStackNavigator();

export const RDisplay = () => {
  return (
        <Stack.Navigator initialRouteName='ReminderMenu'>
            <Stack.Screen name="ReminderMenu" component={ReminderMenu}
            options={{headerShown: false}}/>
            <Stack.Screen name="Reminders" component={Reminders}
            options={{headerBackTitleVisible: true, headerShown:false}}/>
        </Stack.Navigator>
  )
}
