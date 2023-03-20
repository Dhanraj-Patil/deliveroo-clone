import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop:10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        <CategoryCard title="testing1" imgUrl="https://links.papareact.com/gn7"></CategoryCard>
        <CategoryCard title="testing1" imgUrl="https://links.papareact.com/gn7"></CategoryCard>
        <CategoryCard title="testing1" imgUrl="https://links.papareact.com/gn7"></CategoryCard>
        <CategoryCard title="testing1" imgUrl="https://links.papareact.com/gn7"></CategoryCard>
        <CategoryCard title="testing1" imgUrl="https://links.papareact.com/gn7"></CategoryCard>

    </ScrollView>
  )
}

export default categories