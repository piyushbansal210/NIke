import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextBase,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");

import { AntDesign } from "@expo/vector-icons";

export default function CartItem(props) {
  const { id, image, name, price } = props.data.product;
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: image }} style={styles.imageStyle} />
      </View>
      <View style={styles.rightContainerStyle}>
        <View>
          <Text style={styles.nameTextStyle}>{name}</Text>
          <Text style={styles.sizeTextStyle}>SIZE {props.data.size}</Text>
        </View>
        <View>
          <View style={styles.rightBottomWholeStyle}>
            <View style={styles.rightBottomStyle}>
              <View style={styles.iconContainerStyle}>
                <AntDesign
                  name="plus"
                  size={20}
                  color="black"
                  style={styles.iconStyle}
                />
              </View>
              <Text style={styles.quantity}>{props.data.quantity}</Text>
              <View style={styles.iconContainerStyle}>
                <AntDesign
                  name="minus"
                  size={20}
                  color="black"
                  style={styles.iconStyle}
                />
              </View>
            </View>
            <View style={{marginRight:10}}>
              <Text style={{fontFamily:'RBold', fontSize:19}}>${price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    backgroundColor: "#ECECEC",
    marginVertical: 10,
  },
  imageStyle: {
    width: width / 3,
    height: width / 2.5,
  },
  rightContainerStyle: {
    marginLeft: 10,
    paddingVertical: 2,
    justifyContent: "space-between",
    flex:1
  },
  nameTextStyle: {
    fontFamily: "RRegular",
    fontSize: 17,
  },
  sizeTextStyle: {
    fontFamily: "RLight",
    fontSize: 17,
  },
  rightBottomStyle: {
    flexDirection: "row",
  },
  quantity: {
    fontFamily: "RRegular",
    fontSize: 19,
    marginHorizontal:5
  },
  iconStyle: {
    borderRadius: 20,
  },
  iconContainerStyle: {
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    padding: 1,
  },
  rightBottomWholeStyle: {
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: "space-between",
    
  },
});
