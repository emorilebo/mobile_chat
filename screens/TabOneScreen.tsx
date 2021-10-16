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
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          Hola Hola from the moon
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: "#3872E9",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    top: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBotton: "3",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "gray",
  },
});
