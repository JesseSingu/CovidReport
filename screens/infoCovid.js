import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Infocovid() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.sub}>Information on Covid-19</Text>
          <Text style={styles.info}>
            This is a new virus that causes a respiratory illness in people and
            animals and can spread from person-to person through sneezing and
            coughing droplets. This virus has signs and symptoms similar to the
            common cold but is dangerous and if not reported early and managed
            by Health Workers it can cause severe illnesses in humans and can
            lead to death.
          </Text>
          <Text style={styles.info}>
            There are ongoing studies on the origins of Coronavirus. However,
            the current outbreak started in a large animal and seafood market in
            China, in a city called Wuhan.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a3093",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#673AB7",
  },
  sub: {
    color: "#fff",
    fontSize: 20,
    padding: 20,
    fontFamily: "monospace",
    textDecorationLine: "underline",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    alignSelf: "center",
  },
  info: {
    color: "#fff",
    fontSize: 20,
    padding: 20,
    fontFamily: "monospace",
    textDecorationLine: "underline",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
