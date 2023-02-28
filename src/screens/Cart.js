import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import Button from "../component/Button";
import CartItem from "../component/CartItem";

import CART from "../assets/api/cart.js";
import CartFooter from "../component/CartFooter";

export default function Cart() {
  const total = CART.reduce((total, num) => {
    return total + num.quantity * num.product.price;
  }, 0);

  const totalDeliveryCharge = 50;

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={CART}
          renderItem={({ item }) => <CartItem data={item} />}
          ListFooterComponent={({ item }) => (
            <CartFooter total={total} deliveryCharge={totalDeliveryCharge} />
          )}
        />
      </View>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
