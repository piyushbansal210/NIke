import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";
import ProductScreen from "../screens/ProductScreen";
import Cart from "../screens/Cart";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation})=>({
            title: "Products",
            headerTitleStyle: {
              fontFamily: "RBold",
              fontSize: 22,
            },
            headerRight:()=><FontAwesome onPress={()=>navigation.navigate('Cart')} name="shopping-cart" size={24} color="black" style={styles.rightCartIcon}/>
          })}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={({ navigation, route }) => ({
            presentation:'modal',
            title: route.params.name,
            headerTitleStyle: {
              fontFamily: "RBold",
              fontSize: 22,
              marginLeft: -10,
            },
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={styles.iconStyle}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={({ navigation, route }) => ({
            headerTitleStyle: {
              fontFamily: "RBold",
              fontSize: 22,
              marginLeft: -10,
            },
            headerStyle:{
            },
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={styles.iconStyle}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    marginLeft: 10,
  },
  rightCartIcon:{
    marginRight:15,
  }
});
