import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const NFTInfo = ({ comments, views, price, love }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AntDesign name="eyeo" size={15} color="white" />
        <Text style={styles.text}>{views}</Text>
      </View>
      <View style={styles.textContainer}>
        <FontAwesome name="commenting-o" size={15} color="white" />
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.textContainer}>
        <MaterialIcons name="attach-money" size={17} color="white" />
        <Text style={styles.text}>{price}</Text>
      </View>

      <AntDesign name="heart" size={17} color="white" />
    </View>
  );
};

export default NFTInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#443CC7",
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 20,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});
