import { View, Text, FlatList, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import React from 'react';
import diseases, { getListfromFromBackend } from '../../Info/disease';
import Options from "../../../components/menuoptions";


const MenuScreen = () =>{
    return(
        <View style = {styles.container}>
          <TextInput  placeholder="Name" style={styles.input} />
          <TextInput  placeholder="Text" style={styles.input} />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
            <FlatList
            data = {getListfromFromBackend()}
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
      input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius:20,
        borderColor:'#003006',
      },
      button:{
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        width: "20%",
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#003006',
        marginLeft: 'auto', marginRight:'auto',
      },
      buttonText: {
        color:'white',
        fontWeight: '700'
      },
});
export default MenuScreen;