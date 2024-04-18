import React from 'react';
import { Text, View, Button } from 'react-native';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';


export const ReminderMenu = ({navigation}) => {
  return (
    <View>
        <Text style={styles.center}>
            Need a Reminder?
        </Text>
        <Button 
        title="Set One!" 
        onPress={() => navigation.navigate("Reminders")} 
        />
    </View>
  )
}

