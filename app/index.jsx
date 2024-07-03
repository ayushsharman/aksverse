import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home'); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../assets/Splash Screen 01.png')}
        className="w-full h-full"
        resizeMode="cover"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default SplashScreen;
