import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function camera() {
  return (
    <View className='flex-1 justify-center items-center bg-slate-400'>
      <Text className='text-white'>Camera</Text>
    </View>
  )
}