import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "./config/gluestack-ui.config"
import { Loading } from '@components';
import { SignIn } from '@screens';

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {fonstLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}
