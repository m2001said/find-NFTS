import { View, SafeAreaView, StyleSheet, Text, Animated, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";
import React, { useEffect, useRef } from "react";
import NFTImage from "../components/NFTImage";
import NFTAvatars from "../components/NFTAvatars";
import NFTTitle from "../components/NFTTitle";
import NFTInfo from "../components/NFTInfo";
import NFTMoreinfo from "../components/NFTMoreInfo";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

const NFTDetails = ({ route, navigation }) => {
  const { NFTData } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={COLORS.second} />
      </TouchableOpacity>
      <NFTImage image={NFTData.image} imageStyles={styles.imageStyles} />

      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <View style={{ marginTop: -17 }}>
          <NFTAvatars avatars={NFTData.avatars} />
        </View>

        <NFTTitle name={NFTData.name} creator={NFTData.creator} date={NFTData.date} />

        <View style={{ marginTop: SIZES.small + 5 }}>
          <NFTInfo comments={NFTData.comments} views={NFTData.views} price={NFTData.price} />
        </View>

        <NFTMoreinfo title="Address" content={NFTData.address} />
        <NFTMoreinfo title="Token ID" content={NFTData.tokenId} />
        <NFTMoreinfo title="Token ST" content={NFTData.tokenSt} />
        <NFTMoreinfo title="Block Chain" content={NFTData.blockchain} />
      </View>
    </SafeAreaView>
  );
};

export default NFTDetails;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },

  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
  backBtn: {
    width: 30,
    height: 30,
    position: "absolute",
    zIndex: 2,
    backgroundColor: COLORS.white,
    top: 30,
    left: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
