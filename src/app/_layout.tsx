import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

import {
 Inter_400Regular,
 Inter_500Medium,
 Inter_600SemiBold,
 Inter_700Bold,
} from '@expo-google-fonts/inter'
import { useFonts } from "expo-font";
import { Loading } from "../components/loading";

export default function Layout() {
 const [isLoaded] = useFonts({
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
 })

 if(!isLoaded) {
  return <Loading />
 }

 return (
   <SafeAreaView className="flex-1 pt-8 bg-slate-900">
     <Slot />
   </SafeAreaView>
 )
 
}