import "react-native-gesture-handler"

import Home from "./src/pages/Home"
import AppLoading from "expo-app-loading"

import theme from "./src/theme"

import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components/native"
import { useFonts, Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Home />
    </ThemeProvider>
  )
}
