import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");

export default function ProductItem(props) {
  const { image, images, name, price, size, description } = props.data;

  const pressedItem = (name) => {
    props.navigation.navigate('ProductScreen',props.data)
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => pressedItem(name)}
    >
      <Image source={{ uri: image }} style={styles.imageStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 2,
    width: width / 2,
    height: width / 2,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
