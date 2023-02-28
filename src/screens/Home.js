import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import PRODUCTS from '../assets/api/products.js'
import ProductItem from '../component/ProductItem'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={({item})=><ProductItem data={item} navigation={navigation}/>}
        keyExtractor={(item)=> item.name}
        numColumns={2}
        style={styles.flatListStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    flatListStyle:{
        // marginHorizontal:5
    }
})