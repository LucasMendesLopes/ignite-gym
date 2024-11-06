import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config, gluestackUIConfig } from "./config/gluestack-ui.config"
import { Loading } from '@components';
import { Routes } from "./src/routes"
import * as NavigationBar from "expo-navigation-bar";

const { tokens } = gluestackUIConfig

NavigationBar.setBackgroundColorAsync(tokens.colors.gray600);
NavigationBar.setButtonStyleAsync("dark");

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {fonstLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  );
}
