import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Whattodo() {
  return (
    <View style={styles.container}>
      <Text>What to do when one has encountered a case!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a3093",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#673AB7",
  },
});
