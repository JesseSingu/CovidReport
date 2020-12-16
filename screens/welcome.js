import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function Welcome({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("reportScreen");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} />

      <Button color="#673AB7" title="Report a case" onPress={pressHandler} />
    </View>
  );
}

Welcome.navigationOptions = {
  title: "Welcome",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a3093",
    alignItems: "center",
    justifyContent: "center",
  },
});
