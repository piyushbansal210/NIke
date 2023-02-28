import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Button from "../component/Button";

const { height, width } = Dimensions.get("screen");

export default function ProductScreen(props) {
  console.log(props.route.params);
  const { image, images, name, price, sizes, description } = props.route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: image }} style={styles.imageStyle} />
        <View style={styles.detailsStyle}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.priceStyle}>${price}</Text>
          <View style={styles.sizeContainerStyle}>
            <Text style={{fontFamily:'RRegular',}}>SIZE</Text>
            <ScrollView horizontal style={styles.sizeSlideStyle}>
              {sizes.map((item,key) => (
                <View style={styles.sizeStyle} key={key}>
                  <Text style={{fontFamily:'RLight',color:'white'}}>{item}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <Text style={styles.descriptionStyle}>{description}</Text>
          <View style={{ height: 70 }} />
        </View>
      </ScrollView>
      <Button price={price} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonStyle: {
    backgroundColor: "orange",
  },
  imageStyle: {
    width: "100%",
    height: width,
  },
  nameStyle: {
    fontFamily: "RBold",
    fontSize: 25,
  },
  detailsStyle: {
    margin: 15,
  },
  priceStyle: {
    fontFamily: "RBold",
    fontSize: 23,
    marginTop: 3,
    color: "#808080",
  },
  descriptionStyle: {
    fontFamily: "RRegular",
    fontSize: 17,
    marginTop: 5,
  },
  sizeStyle:{
    backgroundColor:'#808080',
    padding:6,
    marginRight:10,
    borderRadius:40
  },
  sizeContainerStyle:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    marginBottom:5
  },
  sizeSlideStyle:{
    marginLeft:10
  }
});
