import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Link href="/camera" className='text-white'>
        Camera
      </Link>
     </View>
  )
}