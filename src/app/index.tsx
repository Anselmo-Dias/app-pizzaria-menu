import { CategoryButton } from "@/components/category";
import { Header } from "@/components/header";
import React, { useState, useRef } from "react";
import { View, FlatList, SectionList, Text, StatusBar } from "react-native";

import { CATEGORIES, MENU } from "@/utils/data/products";
import { Product } from "@/components/product";
import { Link } from "expo-router";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList>(null);

  function handleCategorySelect(categorySelected: string) {
    setCategory(categorySelected);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === categorySelected
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  }

  return (
    <View className="flex-1 bg-slate-900">
      <Header title="Faça seu pedido" />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            onPress={() => {
              handleCategorySelect(item);
            }}
            isSelected={item === category}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-white text-xl font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
