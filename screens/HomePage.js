import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Ionicons,
  Octicons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

//RES
const res = Dimensions.get("window").height;

//IMAGES
import babyDay from "../assets/babyModalDay.png";
import babyNight from "../assets/babyModalNight.png";
import thumbnailDay from "../assets/thumbnailDay.png";
import thumbnailNight from "../assets/thumbnailNight.png";

export default function HomePage({ navigation }) {
  const [dayTime, setDayTime] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    //IF CURRENT TIME AT 6AM - 6PM THEN ITS TRUE
    if (currentHour > 5 && currentHour < 19) {
      setDayTime(true);
    }
  });

  const handleScanQRCode = () => {
    navigation.navigate("Scan");
  };

  const handleOpenQA = () => {
    navigation.navigate("QA");
  };
  return (
    <View style={[styles.home__container]}>
      <View style={[styles.home__content, dayTime ? styles.day : styles.night]}>
        <View style={styles.home__header}>
          <View></View>
          {dayTime ? (
            <Ionicons
              name="sunny"
              onPress={() => setDayTime(!dayTime)}
              style={[styles.header__icon, styles.header__icon_day]}
            />
          ) : (
            <Octicons
              name="moon"
              onPress={() => setDayTime(!dayTime)}
              style={[styles.header__icon, styles.header__icon_night]}
            />
          )}
        </View>
        <View style={styles.home__body}>
          {dayTime ? (
            <Image
              source={thumbnailDay}
              style={styles.content__image_thumbnail}
            />
          ) : (
            <Image
              source={thumbnailNight}
              style={styles.content__image_thumbnail}
            />
          )}
          {dayTime ? (
            <Image source={babyDay} style={styles.content__image_baby} />
          ) : (
            <Image source={babyNight} style={styles.content__image_baby} />
          )}
        </View>
      </View>
      <View
        style={[
          styles.home__bottom_nav,
          dayTime ? styles.home__bottom_nav_day : styles.home__bottom_nav_night,
        ]}
      >
        <View style={styles.bottom__nav_main}>
          <TouchableOpacity
            onPress={handleScanQRCode}
            style={styles.bottom__nav_qrcode}
          >
            <View style={styles.bottom__nav_qrcode_shadow}>
              <AntDesign name="qrcode" style={styles.nav__icon_main} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom__nav_side}>
          <TouchableOpacity
            onPress={handleOpenQA}
            style={styles.bottom__nav_side_item}
          >
            <Ionicons name="chatbubbles" style={styles.nav__icon_side} />
          </TouchableOpacity>
          <View style={styles.bottom__nav_side_item}>
            <MaterialIcons name="group" style={styles.nav__icon_side} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home__container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  home__content: {
    width: "100%",
    height: "100%",
    paddingHorizontal: res * 0.03,
  },
  day: {
    backgroundColor: "#F2D8D8",
  },
  night: {
    backgroundColor: "#374259",
  },
  home__header: {
    marginTop: res * 0.07,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  header__icon: {
    fontSize: res * 0.03,
  },
  header__icon_day: {
    color: "#374259",
  },
  header__icon_night: {
    color: "#FFF",
  },
  home__body: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: res * 0.05,
    gap: res * 0.17,
  },
  content__image_thumbnail: {
    width: res * 0.35,
    height: res * 0.1,
    objectFit: "fill",
  },
  content__image_baby: {
    width: res * 0.23,
    height: res * 0.26,
    objectFit: "fill",
  },
  home__bottom_nav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: res * 0.03,
  },
  home__bottom_nav_day: {
    backgroundColor: "#374259",
  },
  home__bottom_nav_night: {
    backgroundColor: "#F2D8D8",
  },
  bottom__nav_side: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingVertical: res * 0.04,
  },
  bottom__nav_side_item: {
    backgroundColor: "#F2D8D8",
    width: res * 0.06,
    height: res * 0.06,
    borderRadius: (res * 0.06) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  nav__icon_side: {
    fontSize: res * 0.03,
    color: "#374259",
  },
  bottom__nav_main: {
    position: "absolute",
    bottom: res * 0.05,
    width: res * 0.17,
    height: res * 0.17,
    borderRadius: (res * 0.17) / 2,
    backgroundColor: "#F2D8D8",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom__nav_qrcode: {
    width: res * 0.13,
    height: res * 0.13,
    borderRadius: (res * 0.13) / 2,
    backgroundColor: "#374259",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom__nav_qrcode_shadow: {
    backgroundColor: "#374259",
    width: res * 0.1,
    height: res * 0.1,
    borderRadius: (res * 0.1) / 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#272F3F",
    borderWidth: res * 0.005,
  },
  nav__icon_main: {
    fontSize: res * 0.05,
    color: "#FFF",
  },
});
