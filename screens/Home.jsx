import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  Animated,
} from "react-native";
import { COLORS, DATA, FONTS, SIZES } from "../constants";
import NFTCard from "../components/NFTCard";
import HomeHeader from "../components/HomeHeader";
import { StatusBar } from "react-native";

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={nftsData}
          renderItem={({ item }) => <NFTCard NFTData={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 10,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});
