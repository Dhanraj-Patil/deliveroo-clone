import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_desc, dishes, long, lat }) => {
    return (
        <TouchableOpacity>
            <View className="bg-white flex-col mr-4 rounded overflow-hidden">
                <Image source={{
                    uri: imgUrl
                }}
                    className="w-64 h-36"
                />
                <View className="p-3">
                    <Text className="font-bold text-lg text-black">{title}</Text>
                    <View className="space-x-2 flex-row ">
                        <StarIcon size={20} color="green" />
                        <Text>
                            <Text className="text-green-700">{rating}</Text> · <Text className="font-bold text-gray-400">{genre}</Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-2">
                        <MapPinIcon color="gray" opacity={0.4} size={22}/>
                        <Text className="text-xs text-gray-400 font-bold">Nearby · {address} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard