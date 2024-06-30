import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface HeaderProps {
  title: string;
  quantityItems?: number;
}

export function Header({ title, quantityItems }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className=" w-32 h-6" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      <TouchableOpacity className="relative" activeOpacity={0.7}>
        <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center absolute z-10 -right-2 -top-2">
          <Text className="text-slate-900 font-bold text-xs">{quantityItems || 0}</Text>
        </View>
        <Feather name="shopping-bag" color={colors.white} size={24} />
      </TouchableOpacity>
    </View>
  );
}
