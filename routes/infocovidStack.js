import { createStackNavigator } from "react-navigation-stack";
import InfoCovid from "../screens/infoCovid";
import Header from "../shared/header";
import React from "react";

const screens = {
  InfoCovid: {
    screen: InfoCovid,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Information on Covid-19" />
        ),
      };
    },
  },
};

const InfoCovidStack = createStackNavigator(screens);

export default InfoCovidStack;
