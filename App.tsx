import React from 'react';
import { LogBox } from 'react-native';
import theme from './src/global/Styles/theme';
import { useFonts } from '@expo-google-fonts/inter';
import { Home } from './src/Screens/Home';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';




export default function App() {
  const [fontsLoaded] = useFonts({
    'sf-Pro-bold': require('./src/assets/fonts/sf-pro-display-bold.ttf'),
    'sf-Pro-medium': require('./src/assets/fonts/sf-pro-display-medium.ttf'),
    'sf-Pro-regular': require('./src/assets/fonts/sf-pro-display-regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

