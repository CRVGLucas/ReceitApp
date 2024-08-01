
import { ActivityIndicator, StatusBar} from 'react-native';
import theme from './themes/index'
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Routes } from './routes';
import { NavigationContainer } from '@react-navigation/native';
export default function HomeScreen() {
  const [isFontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" translucent />
        {
          isFontsLoaded ?
          <Routes/>
          :
          <ActivityIndicator/>
        }
      </ThemeProvider>
    </NavigationContainer>
  );
}