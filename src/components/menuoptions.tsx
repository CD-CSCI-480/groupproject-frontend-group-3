import { Link } from "expo-router";
import { Disease} from "./types";
import { StyleSheet, Text, View, Image, Pressable, TouchableHighlight } from "react-native";
import { useState } from "react";
type example = {
    d : Disease;
}


const Options = ({d} : example) => {
    const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
    return(
        <Link href = {`${d.id}`} asChild>
            <TouchableHighlight 
            style = {[styles.container, isPressed && styles.clicked]} 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor={"gray"}
            >
            <Text>{d.name}</Text>
            <Image 
            source={{ uri: d.image}}
            resizeMode="contain"
            
            />

            </TouchableHighlight>
        </Link>
    )
}
export default Options

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    clicked:{
        backgroundColor: "grey",
    },
    image:{
        alignItems:"flex-end",
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
      },
})