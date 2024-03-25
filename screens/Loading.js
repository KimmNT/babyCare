import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
//RES
const res = Dimensions.get("window").height;

//IMAGE
import loadingBaby from "../assets/loadingBabyCare.png";
import babyCare from "../assets/BabyCare.png";

export default function Loading() {
  return (
    <View style={styles.loading__container}>
      <View style={styles.loading__content}>
        <Image source={loadingBaby} style={styles.loading__image_baby} />
        <Image source={babyCare} style={styles.loading__image_title} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading__container: {
    backgroundColor: "#374259",
    height: "100%",
    width: "100%",
  },
  loading__content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  loading__image_baby: {
    width: res * 0.4,
    height: res * 0.3,
    objectFit: "contain",
  },
  loading__image_title: {
    width: res * 0.2,
    height: res * 0.3,
    objectFit: "contain",
  },
});
