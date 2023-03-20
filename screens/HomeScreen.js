import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {

  const navigation = useNavigation()
  const [featuredCategories,setFeaturedCategories]=useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  // useEffect(()=>{
  //   sanityClient.fetch(`
  //       *[_type == "featured"] {
  //           ...,
  //           restaurants[]->{
  //             ...,
  //             dishes[]->
  //           }
  //   }`).then((data)=>{
  //     setFeaturedCategories(data);
  //   })
  // },[])
  // console.log(featuredCategories)

  return (
    <SafeAreaView className="bg-white">

      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{
          uri: "https://links.papareact.com/wru"
        }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now
          </Text>
          <Text className="font-bold text-xl ">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* search */}

      <View className="flex-row mx-4 mb-2 items-center">
        <View className="flex-1">
          <View className="flex-row space-x-2 bg-gray-200 p-2">
            <MagnifyingGlassIcon color="gray" />
            <TextInput
              placeholder='Restaurants and cuisines'
              keyboardType='default' />
          </View>
        </View>
        <View className="m-1">
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>

      {/* body */}
        <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom:140
        }}>

          {/* components */}

          <Categories />

          {/* fearures */}

          <FeaturedRow
            title="Featured"
            description="Paid placements for our partners."
            id="123" />
          <FeaturedRow
            title="Tasty Discounts"
            description="Everybody's been enjoying these juicy discounts."
            id="1234" />
          <FeaturedRow
            title="Offers near you!"
            description="Why not support your local restaurant tonight!"
            id="12345" />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen