import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Card = ({ image, text }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.95,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,  
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    padding: 10,
    fontSize: 16,
    color: '#333333',
  },
});

export default Card;
