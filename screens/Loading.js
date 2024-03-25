import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

//IMAGE
import loadingBaby from "../assets/loadingBabyCare.png";

export default function Loading() {
  return (
    <View>
      <Text>Loading</Text>
      <Image source={loadingBaby} style={{ width: 50, height: 50 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
