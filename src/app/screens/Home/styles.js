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
    marginBottom: 16,
    color: '#003006',
  },
  chatBubble: {
    backgroundColor: '#0B93F6',
    borderRadius: 50,
    padding: 16,
    position: 'relative',
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  calendarIcon: {
    fontSize: 30,
    color: 'white',
  },
});
