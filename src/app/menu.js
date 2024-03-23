import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import diseases from './Info/disease';

const MenuScreen = () =>{
    return(
        <View style = {styles.container}>
            <FlatList
            data = {diseases}
            //renderItem={({item}) => }
            //keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style = {styles.name}>{item.name}</Text>
                </View>
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
        flex : 1,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: '#fff',
        width : "100%"
    },
    item: {
        width: 320,
        marginBottom: 10,
        padding: 10,
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