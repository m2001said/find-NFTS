import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const NFTTitle = ({ name, creator, date }) => {
  return (
    <View>
      <Text style={styles.textName}>{name}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.textCreator}>{creator}</Text>
        <Text style={styles.textCreator}>{date}</Text>
      </View>
    </View>
  );
};

export default NFTTitle;
const styles = StyleSheet.create({
  textName: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  textCreator: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
});
