import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout actions here
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
    <Image source={require('./susano.png')} style={styles.image} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  buttonContainer: {
    width: '80%',
    backgroundColor: '#000000', // Black background for button
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
