import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, id }) => {
    return (
        <View>
            <View className="flex-row items-center justify-between mt-4 px-4">
                <View className="flex-1">
                    <Text className="text-lg font-bold">{title}</Text>
                    <Text className="text-xs font-bold text-gray-400">{description}</Text>
                </View>
                <ArrowRightIcon size={20} color="#00CCBB" />
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pt-4">
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japnese"
                    address="123 123"
                    short_desc="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="apnese"
                    address="123 123"
                    short_desc="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="apnese"
                    address="123 123"
                    short_desc="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow