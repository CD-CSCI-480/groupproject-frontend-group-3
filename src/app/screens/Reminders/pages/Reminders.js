import React,{useState} from 'react';
import { View, Text, Platform, TouchableOpacity, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './styles'

const days = [
    {title: 'S', active: false},
    {title: 'M', active: false},
    {title: 'T', active: false},
    {title: 'W', active: false},
    {title: 'T', active: false},
    {title: 'F', active: false},
    {title: 'S', active: false},
  ];


export const Reminders = ({navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
    const [background, setBackground] = useState('white');
    const [text, setText] = useState('#003006');
    const [selectedDayIndex, setSelectedDayIndex] = useState(-1);


    
    const onChange = (_event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

      const onPress = (index) => {
        setSelectedDayIndex(index); 

        days.forEach((day, i) => {
      if (i === index) {
        day.active = !day.active; 
      } 
    });
      };

  return (
    <View style= {styles.container}>
    <View style= {styles.headingWrapper}>
        <Text style={styles.heading}>What time do you need</Text>
        <Text style={styles.heading}>to take your medication?</Text>
    </View>
    <View style={styles.timePicker}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
    </View>
    <View style= {styles.headingWrapper}>
        <Text style={styles.heading}>Which days do you need</Text>
        <Text style={styles.heading}>to take your medication?</Text>
    </View>
    <View style={styles.dayContainer}>
        {days.map((item, index) => {
          return (
            <TouchableOpacity
            onPress={() => onPress(index)}
            
              style={[
                styles.dayItem,
                {
                  backgroundColor: item.active ? '#003006' : 'white',
                },
              ]}>
              <Text
                style={[
                  styles.dayTitle,
                  {color: item.active ? 'white' : 'black',
                  fontWeight: 'bold',
                  fontSize:16
                },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Button title="Go Back" onPress={() => navigation.navigate("ReminderMenu")}/>
    </View>
  )
}

