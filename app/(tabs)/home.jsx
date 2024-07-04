import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/card';
import image1 from '../../assets/goku.jpg';
import image2 from '../../assets/jin.jpg';
import image3 from '../../assets/jimin.jpg';
import image4 from '../../assets/og.jpg';
import image5 from '../../assets/cap.jpg';

export default function HomeScreen() {
  const [cards, setCards] = useState([
    { id: 1, image: image1, text: "This is my Instagram-like post" },
    { id: 2, image: image2, text: "Here is another post" },
    { id: 3, image: image3, text: "Jimin" },
    { id: 4, image: image4, text: "Originals" },
    { id: 5, image: image5, text: "Captain America" },
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
