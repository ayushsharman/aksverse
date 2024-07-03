import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/card';
import image1 from '../../assets/goku.jpg';
import image2 from '../../assets/jin.jpg';

export default function HomeScreen() {
  const [cards, setCards] = useState([
    { id: 1, image: image1, text: "This is my Instagram-like post" },
    { id: 2, image: image2, text: "Here is another post" }
  ]);

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 10 }}>
          My Designs
        </Text>
        <View>
          {cards.map(card => (
            <Card key={card.id} image={card.image} text={card.text} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
