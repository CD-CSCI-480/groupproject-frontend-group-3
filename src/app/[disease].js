import {Stack, useLocalSearchParams } from 'expo-router';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { useState } from 'react';
import diseases from './Info/disease';

const { id } = useLocalSearchParams();
const disease = diseases.find((d) => d.id.toString() === id);

const DiseaseScreen = () =>{
    <View style = {style.container}>
        <Stack.Screen options={{title: disease.name}}/>{// should be changed to the specific disease

        }
    </View>

}
const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        padding: 10,
    },
    image: {
        width: "80%",
        aspectRatio: 1,
        margin: 10,
        backgroundColor: "BBE14E",
        borderRadius: 20,
    },
    textContainer: {

    },
    text: {
        fontFamily: "Georgia", 
        fontSize: 12,
        fontWeight: "500",
        color: "black",// will be add a conditional to make this white on dark mode.
    },
})

export default DiseaseScreen;