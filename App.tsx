import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { Center, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from "./config/gluestack-ui.config"
import { Loading } from '@components';

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {fonstLoaded ?
        <Center flex={1} bg='$gray700'>
          <Text>Home</Text>
        </Center>
        : <Loading />}
    </GluestackUIProvider>
  );
}
