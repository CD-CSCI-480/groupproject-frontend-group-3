import React from 'react';
import { Text, View, Button } from 'react-native';
import {styles} from './styles';


export const ReminderMenu = ({navigation}) => {
  return (
    <View>
        <Text style={styles.center}>
            Need a Reminder?
        </Text>
        <Button 
        title="Set One!" 
        color="#07b81f"
        onPress={() => navigation.navigate("Reminders")} 
        />
    </View>
  )
}

