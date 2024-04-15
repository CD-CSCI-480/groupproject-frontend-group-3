import {Stack, useLocalSearchParams } from 'expo-router';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { useState } from 'react';
import diseases from '../Info/disease';



const DiseaseScreen = () =>{
    
    const { id } = useLocalSearchParams();
    disease = diseases.find((d) => d.id.toString() === id);
    disease = diseases[1]; // To be deleted once stack navigation works
  return(
    
    <View style = {style.container}>
        {/*<Stack.Screen options={{title: disease.name}}/>should be changed to the specific disease*/}
        <View>
            <Image src={disease.picture} style = {style.image}></Image>
        </View>
        
        <View style = {style.textContainer}> 
            <Text style = {style.text}> {disease.text}</Text>
        </View>
       
    </View>
);
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        padding: 10,
    },
    image: {
        width: "80%",
        height:"60%",
        aspectRatio: 1,
        margin: 10,
        //backgroundColor: "BBE14E",
        borderRadius: 20,
    },
    textContainer: {
        borderColor:"green",
        borderWidth:5,
        borderRadius: 10,
        height:"30%",
    },
    text: {
        fontFamily: "Georgia", 
        fontSize: 12,
        fontWeight: "500",
        color: "black",// will be add a conditional to make this white on dark mode.
    },
})

export default DiseaseScreen;