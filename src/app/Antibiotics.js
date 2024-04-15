import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const antibioticsData = [
  { id: 1, name: 'Amoxicillin', chemicalBuild: 'C16H19N3O5S' },
  { id: 2, name: 'Penicillin', chemicalBuild: 'C16H18N2O4S' },
  { id: 3, name: 'Ciprofloxacin', chemicalBuild: 'C17H18FN3O3' },
  { id: 4, name: 'Azithromycin', chemicalBuild: 'C38H72N2O12' },
  
];

const Antibiotics = () => {
  return (
    <View style={styles.container}>
      
      <FlatList
        data={antibioticsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.chemicalBuild}>Chemical Build: {item.chemicalBuild}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20
  },
  item: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 100
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chemicalBuild: {
    fontSize: 14,
    color: '#667',
  },
});

export default Antibiotics;