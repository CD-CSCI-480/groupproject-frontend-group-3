import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import {TabLayout} from "src/app/tabstemp";
import MenuScreen from './src/app/(tabs)/menu/menu';
import DiseaseScreen from './src/app/(tabs)/[disease]';
export default function App() {
  
  
  //return (
  //  <View style={styles.container}>
  //    <Text style= {styles.text}>Open up App.js to start working on your app!</Text>
  //    <StatusBar style="auto" />
  //  </View>
  //);
  return(
    <DiseaseScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "blue",
    fontWeight: "bold",
  },
});
