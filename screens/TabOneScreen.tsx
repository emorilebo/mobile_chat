import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
        style={styles.image}
      />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 30,
    color: "blue",
  },
});
