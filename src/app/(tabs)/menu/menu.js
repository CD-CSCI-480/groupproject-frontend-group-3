import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import diseases from '../../Info/disease';
import Options from "../../../components/menuoptions";

const MenuScreen = () =>{
    return(
        <View style = {styles.container}>
            <FlatList
            data = {diseases}
            //renderItem={({item}) => }
            //keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Options d = {item}/>
               /*<View style={styles.item}>
                  <Text style = {styles.name}>{item.name}</Text>
                  <Image source={{uri: item.picture}}/>
                </View>*/
              )}
            //numColumns={3}
            contentContainerStyle={{padding: 10}}
            //columnWrapperStyle = {{gap : 10}}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex : 1,// Trying to stretch these out
      justifyContent: 'center',
      //alignItems: 'left',
      backgroundColor: '#fff',
      width : "100%",
      marginTop: 30,
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
      name: {
        fontSize: 16,
        fontWeight: 'bold',
      },
});
export default MenuScreen;