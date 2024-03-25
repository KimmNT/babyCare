import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/HomePage";
import Loading from "../screens/Loading";
import ScanQR from "../screens/ScanQR";
import Detail from "../screens/Detail";
import QA from "../screens/QA";

const Stack = createNativeStackNavigator();

export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Scan" component={ScanQR} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="QA" component={QA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
