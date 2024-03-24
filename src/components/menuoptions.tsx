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
        <Link href = {`../app/(tabs)/${d.id}`} asChild>
            <TouchableHighlight 
            style = {[styles.container, isPressed && styles.clicked]} 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor={"gray"}
            >
                <View style = {styles.item}>
            <Text style = {styles.name}>{d.name}</Text>
            <Image 
            source={{ uri: d.image}}
            resizeMode="contain"
            
            />
            </View>
            </TouchableHighlight>
        </Link>
    )
}
export default Options

const styles = StyleSheet.create({
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

      container: {
        flex : 1,// Trying to stretch these out
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#fff',
        width : "100%",
        verticalAlign: "middle",
        borderWidth: 1,
    },
    item: {
        
        flex: 1,
        marginBottom: 10,
        padding: 10,
        //width : "100%",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
})