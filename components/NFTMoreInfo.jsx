import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const NFTMoreInfo = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.gray }}>{title}</Text>
      <Text style={{ color: COLORS.gray }}>{content}</Text>
    </View>
  );
};

export default NFTMoreInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: COLORS.cardBg,
    borderBottomWidth: 1,
    paddingBottom: 2,
    paddingTop: 2,
  },
});
