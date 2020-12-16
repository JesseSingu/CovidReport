import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

export default function Reportscreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              padding: 10,
              fontFamily: "monospace",
              textDecorationLine: "underline",
            }}
          >
            Please fill in!
          </Text>
          <Text style={styles.bigTitle}>Reporter's Details</Text>
          <Text style={styles.smallTitles}>Reporter's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="E.g Peter Brown"
            placeholderTextColor={"#948E99"}
            color={"#fff"}
          />
          <Text style={styles.smallTitles}>Reporter's Phone Number</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="+25**********"
            placeholderTextColor={"#948E99"}
            color={"#fff"}
          />
          <Text style={styles.smallTitles}>
            Area of Discovery (Where did you find the case?)
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Town, Counrty, Address"
            placeholderTextColor={"#948E99"}
            color={"#fff"}
          />
          <Text style={styles.bigTitle}>Infected's Details</Text>
          <Text style={styles.smallTitles}>Patient's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="E.g Adam Bule"
            placeholderTextColor={"#948E99"}
            color={"#fff"}
          />
          <Text style={styles.smallTitles}>Place of residence</Text>
          <TextInput
            style={styles.input}
            placeholder="Town, village"
            placeholderTextColor={"#948E99"}
            color={"#fff"}
          />
          <Text style={styles.smallTitles}>
            Briefly describe the status of the patient. Please be as descriptive
            as possible.
          </Text>
          <TextInput
            multiline
            style={{
              height: 200,
              borderColor: "#fff",
              borderWidth: 1,
              padding: 10,
            }}
            placeholder="How severe is the case? How is the infected person feeling? Does the infected show any visible symptoms e.g fever? Is the infected having any breathing issues?"
            placeholderTextColor={"#948E99"}
            color={"#fff"}
          />
          <Button
            color="#673AB7"
            title="Submit form"
            onPress={() => alert("Thank you for reporting a case!")}
            style={{ padding: 10 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a3093",
    padding: 20,
    borderWidth: 5,
    borderColor: "#673AB7",
  },
  smallTitles: {
    color: "#fff",
    fontSize: 15,
    padding: 5,
    fontFamily: "sans-serif-light",
  },

  bigTitle: {
    color: "#fff",
    fontSize: 20,
    padding: 10,
    fontFamily: "Roboto",
    textDecorationLine: "underline",
  },
  bigTitle1: {},
  input: {
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    padding: 10,
  },
});
