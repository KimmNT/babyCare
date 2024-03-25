import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import closeBtn from "../assets/closeBtn.png";

const res = Dimensions.get("window").height;

export default function QA({ navigation }) {
  const [qaArray, setQAArray] = useState([
    {
      qaId: 1,
      qaTitle: "Q&A 01",
      qaValue: false,
      qaContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet dui sit amet ligula venenatis ultrices vitae eu libero. Nullam eros libero, viverra eget nunc a, elementum placerat erat. Donec ultricies, nisi eget feugiat scelerisque, ante justo cursus nisl, pellentesque vulputate dolor felis id ligula.",
    },
    {
      qaId: 2,
      qaTitle: "Q&A 02",
      qaValue: false,
      qaContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet dui sit amet ligula venenatis ultrices vitae eu libero. Nullam eros libero, viverra eget nunc a, elementum placerat erat. Donec ultricies, nisi eget feugiat scelerisque, ante justo cursus nisl, pellentesque vulputate dolor felis id ligula.",
    },
    {
      qaId: 3,
      qaTitle: "Q&A 03",
      qaValue: false,
      qaContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet dui sit amet ligula venenatis ultrices vitae eu libero. Nullam eros libero, viverra eget nunc a, elementum placerat erat. Donec ultricies, nisi eget feugiat scelerisque, ante justo cursus nisl, pellentesque vulputate dolor felis id ligula.",
    },
    {
      qaId: 4,
      qaTitle: "Q&A 04",
      qaValue: false,
      qaContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet dui sit amet ligula venenatis ultrices vitae eu libero. Nullam eros libero, viverra eget nunc a, elementum placerat erat. Donec ultricies, nisi eget feugiat scelerisque, ante justo cursus nisl, pellentesque vulputate dolor felis id ligula.",
    },
  ]);

  const handleOpenQAContent = (id) => {
    const updatedQAArray = qaArray.map((qa) =>
      qa.qaId === id ? { ...qa, qaValue: true } : qa
    );
    setQAArray(updatedQAArray);
  };

  return (
    <View style={styles.qa__container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.qa__back}
      >
        <Image source={closeBtn} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.qa__list}>
          {qaArray.map((qa) => (
            <View key={qa.qaId} style={styles.qa__item}>
              <Text
                style={styles.qa__item__title}
                onPress={() => handleOpenQAContent(qa.qaId)}
              >
                {qa.qaTitle}
              </Text>
              {qa.qaValue ? (
                <Text style={styles.qa__itme_content}>{qa.qaContent}</Text>
              ) : (
                <></>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  qa__container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: res * 0.05,
  },
  qa__back: {
    marginTop: res * 0.06,
    paddingBottom: res * 0.03,
  },
  qa__list: {
    marginTop: res * 0.05,
    paddingHorizontal: res * 0.02,
  },
  qa__item: {
    backgroundColor: "#374259",
    paddingHorizontal: res * 0.03,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.02,
    marginBottom: res * 0.05,
  },
  qa__item__title: {
    fontSize: res * 0.02,
    color: "#FFF",
    fontWeight: "600",
  },
  qa__itme_content: {
    marginTop: res * 0.02,
    color: "#FFF",
    paddingBottom: res * 0.02,
  },
});
