import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import image from '../../assets/og.jpg';

export default function ProfileScreen() {
  const handleContactPress = () => {
    Linking.openURL('mailto:artist@example.com');
  };

  const handleSocialPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="items-center mb-6 mt-4">
        <Image
          source={image}
          className="w-32 h-32 rounded-full mb-4"
        />
        <Text className="text-2xl font-bold text-gray-800">AkSVerse</Text>
        <Text className="text-lg text-gray-600">Visual Artist</Text>
      </View>

      <View className="mb-6">
        <Text className="text-xl font-semibold mb-2 text-gray-800">Bio</Text>
        <Text className="text-base text-gray-700">
          AkSVerse is a contemporary visual artist. Her work 
          explores themes of nature and technology, blending traditional painting 
          techniques with digital media. 
        </Text>
      </View>

      <View className="mb-6">
        <Text className="text-xl font-semibold mb-2 text-gray-800">Contact</Text>
        <TouchableOpacity onPress={handleContactPress} className="bg-black py-2 px-4 rounded-md">
          <Text className="text-white text-center font-semibold">Contact Me</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-xl font-semibold mb-2 text-gray-800">Social Media</Text>
        <View className="flex-row justify-around">
          <TouchableOpacity 
            onPress={() => handleSocialPress('https://www.instagram.com/aks_verse/')}
            className="bg-pink-600 py-2 px-4 rounded-md"
          >
            <Text className="text-white font-semibold">Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            // onPress={() => handleSocialPress('https://www.twitter.com/aksverse')}
            className="bg-blue-400 py-2 px-4 rounded-md"
          >
            <Text className="text-white font-semibold">Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            // onPress={() => handleSocialPress('https://www.linkedin.com/in/aksverse')}
            className="bg-blue-700 py-2 px-4 rounded-md"
          >
            <Text className="text-white font-semibold">LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}