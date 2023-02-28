import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CartFooter(props) {
  return (
    <View>
      <View style={styles.dividerStyle} />
      <View style={styles.bottom}>
        <View style={styles.innerContainerStyle}>
          <Text style={styles.titleStyle}>SUBTOTAL</Text>
          <Text style={styles.valueStyle}>${props.total}</Text>
        </View>
        <View style={styles.innerContainerStyle}>
          <Text style={styles.titleStyle}>DELIVERY</Text>
          <Text style={styles.valueStyle}>${props.deliveryCharge}</Text>
        </View>
        <View style={styles.innerContainerStyle}>
          <Text style={styles.titleStyle}>TOTAL</Text>
          <Text style={styles.valueStyle}>${props.total + props.deliveryCharge}</Text>
        </View>
      </View>

      <View style={{ height: 70 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerStyle: {
    height: 1,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 15,
    marginTop: 15,
  },
  bottom:{
    margin:15
  },
  innerContainerStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:6,
  },
  titleStyle:{
    fontFamily:'RBold',
  },
  valueStyle:{
    fontFamily:'RRegular'
  }
});
