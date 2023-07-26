import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import avatar from "../assets/images/avatars/avatar03.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHeader = ({ searchHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} resizeMode="contain" />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.userText}>Ahmed Ali</Text>
            <MaterialCommunityIcons name="check-decagram" size={20} color="white" />
          </View>
          <Text style={{ color: COLORS.white }}>creator</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color={COLORS.white} />
        <TextInput
          placeholder="Search by NFT name"
          placeholderTextColor={"white"}
          style={{ flex: 1, color: COLORS.white }}
          onChangeText={searchHandler}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 10,
  },
  userText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.cardBg,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 30,
    gap: 8,
  },
});
