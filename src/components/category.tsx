import React from 'react';
import { View, Pressable, PressableProps, Text } from 'react-native';
import { Header } from './header';
import clsx from 'clsx';

interface CategoryProps extends PressableProps {
 title: string;
 isSelected?: boolean;
}

export function CategoryButton({title, isSelected, ...rest}: CategoryProps) {
  return (
    <Pressable className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10 border-2 border-transparent', isSelected && ' border-lime-300')} {...rest}>
     <Text className='text-slate-100 font-subtitle text-sm'>{title}</Text>
    </Pressable>
  );
}