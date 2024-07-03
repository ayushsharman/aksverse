import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl">Op!</Text>
      <StatusBar style="auto" />
    </View>
  );
}