import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

export default function ProfileScreen() {
  const handleContactPress = () => {
    Linking.openURL('mailto:artist@example.com');
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="items-center mb-6">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-32 h-32 rounded-full mb-4"
        />
        <Text className="text-2xl font-bold text-gray-800">Jane Doe</Text>
        <Text className="text-lg text-gray-600">Visual Artist</Text>
      </View>

      <View className="mb-6">
        <Text className="text-xl font-semibold mb-2 text-gray-800">Bio</Text>
        <Text className="text-base text-gray-700">
          Jane Doe is a contemporary visual artist based in New York City. Her work 
          explores themes of nature and technology, blending traditional painting 
          techniques with digital media. With over 10 years of experience, Jane has 
          exhibited her art in galleries across the United States and Europe.
        </Text>
      </View>

      <View className="mb-6">
        <Text className="text-xl font-semibold mb-2 text-gray-800">Contact</Text>
        <TouchableOpacity onPress={handleContactPress} className="bg-blue-500 py-2 px-4 rounded-md">
          <Text className="text-white text-center font-semibold">Contact Me</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-xl font-semibold mb-2 text-gray-800">Social Media</Text>
        <View className="flex-row justify-around">
          <Text className="text-blue-500">Instagram</Text>
          <Text className="text-blue-500">Twitter</Text>
          <Text className="text-blue-500">LinkedIn</Text>
        </View>
      </View>
    </View>
  );
}