import React from 'react';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const [loaded] = useFonts({
    'AvertaStd-Semibold': require('./src/assets/fonts/AvertaStd-Semibold.otf'),
    'AvertaStd-Regular': require('./src/assets/fonts/AvertaStd-Regular.otf'),
  });

  if (!loaded) {
    return null;
  }

  return <AppNavigator />;
};

export default App;
