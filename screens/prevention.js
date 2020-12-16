import React from "react";
import { StyleSheet, Text, View, ScrollView, _ScrollView } from "react-native";
import Unorderedlist from "react-native-unordered-list";

export default function Prevention() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.subTitle}>How to prevent Covid-19</Text>
          <Text style={styles.infos}>
            There are simple everyday actions that can help prevent the spread
            of the virus:
          </Text>
          <Unorderedlist bulletUnicode={0x2022}>
            <Text style={styles.infos}>
              Avoid close contact with people who are visibly sick with flu-like
              symptoms (fever, cough, sneezing).
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022}>
            <Text style={styles.infos}>
              Avoid touching your eyes, nose, and mouth with unwashed hands.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022}>
            <Text style={styles.infos}>
              Wash your hands often with soap and running water for at least 20
              seconds. If soap and water are not available, use an alcohol-based
              hand sanitizer.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022}>
            <Text style={styles.infos}>
              Stay home when you experience these symptoms to avoid spreading
              illness to others.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022}>
            <Text style={styles.infos}>
              The sick are encouraged to use a facemask to cover their nose and
              mouth.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022}>
            <Text style={styles.infos}>
              Cover your mouth and nose with a tissue when you cough or sneeze,
              then throw the tissue in the dustbin and wash your hands
              thoroughly with soap and running water.
            </Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2022}>
            <Text style={styles.infos}>
              Regularly clean and disinfect frequently touched objects and
              surfaces such as door handles and phones.
            </Text>
          </Unorderedlist>
          <Text style={styles.subTitle}>
            WEAR A MASK AND SANITIZE REGULARLY!
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
    borderWidth: 5,
    borderColor: "#673AB7",
    alignItems: "center",
  },
  subTitle: {
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
  infos: {
    color: "#fff",
    justifyContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 15,
    padding: 10,
  },
});
