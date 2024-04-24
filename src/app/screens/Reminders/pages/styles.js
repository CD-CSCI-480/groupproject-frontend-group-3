import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    center: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 30,
      color: '#003006',
      textAlign: 'center',
      margin: 50
    },
    container: {
      display: 'flex',
      flex: 1,
      padding: 20,
      marginTop: 50,
    },
    headingWrapper: {},
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 30,
      color: '#003006',
    },
    timePicker: {
      borderRadius: 20,
      marginTop: 30,
      marginBottom: 30,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    dayContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      marginBottom: 40,
    },
    dayItem: {
      width: 40,
      height: 40,
      borderRadius: 50,
      borderWidth:2,
      borderColor: '#003006',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dayTitle: {
      fontSize: 14,
      padding: 10,
    },
    btnWrapper: {
      marginTop: 55,
    },
    dayTitle:
    {
      fontWeight: 'bold',
      fontSize:16
    },
    button:{
      marginTop:'25%',
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
    input: {
      height: 40,
      margin: 30,
      borderWidth: 1,
      padding: 10,
      borderRadius:20,
      borderColor:'#003006',
    },
  });