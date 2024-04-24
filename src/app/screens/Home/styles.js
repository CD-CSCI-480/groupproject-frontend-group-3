import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003006',
    textAlign:"center"
  },
  chatBubble: {
    backgroundColor: '#10940c',
    borderRadius: 50,
    padding: 25,
    position: 'relative',
    alignSelf: 'flex-end',
    marginRight: 25,
    marginBottom:25,
  },
  calendarIcon: {
    fontSize: 40,
    color: 'white',
  },
  image:{
    width: 80, 
    height: 100,  
    alignSelf:"center",
    marginBottom:20
  },
  welcomeComp:{
    marginBottom:'auto',
    marginTop:80,
  }
});
