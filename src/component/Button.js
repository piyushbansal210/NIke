import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");

export default function Button({ price }) {
  return (
    <View style={[styles.container,{
      justifyContent: !price ?"center":"space-between",
    }]}>
      {price && <Text style={styles.priceTagStyle}>Add To Cart</Text>}
      {!price && <Text style={styles.priceTagStyle}>Checkout</Text>}
      {price && <Text style={styles.priceStyle}>${price}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    
    padding: 15,
    position: "absolute",
    bottom: 10,
    width: width - 20,
    alignSelf: "center",
    flexDirection:'row',
  },
  priceStyle: {
    color: "white",
    fontFamily: "RRegular",
    fontSize: 20,
  },
  priceTagStyle:{
    color: "white",
    fontFamily: "RRegular",
    fontSize: 20,
  }
});
