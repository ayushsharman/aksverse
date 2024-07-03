import { View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen() {
  return (
    <View className="flex-1" options = {{headerShown: false}}>
      <Image
        source={require('../assets/Splash Screen 01.png')}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      />
      <StatusBar style="auto" />
    </View>
  );
}