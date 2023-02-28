import { StatusBar as SB } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Platform, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import Home from './src/screens/Home'
import Navigation from './src/navigation/Navigation';

export default function App() {

  const [fontLoaded]=useFonts({
    'Black':require('./src/assets/fonts/SourceSansPro-Black.ttf'),
    'Bold':require('./src/assets/fonts/SourceSansPro-Bold.ttf'),
    'ExtraLight':require('./src/assets/fonts/SourceSansPro-ExtraLight.ttf'),
    'Light':require('./src/assets/fonts/SourceSansPro-Light.ttf'),
    'Regular':require('./src/assets/fonts/SourceSansPro-Regular.ttf'),
    'SemiBold':require('./src/assets/fonts/SourceSansPro-SemiBold.ttf'),
    'RBold':require('./src/assets/fonts/Bold.ttf'),
    'RLight':require('./src/assets/fonts/Light.ttf'),
    'RRegular':require('./src/assets/fonts/Regular.ttf'),
  })


  return (
    <View style={styles.container}>
      <Navigation/>
      <SB style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === "ios"?0: StatusBar.currentHeight,
  },
});
