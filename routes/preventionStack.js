import { createStackNavigator } from "react-navigation-stack";
import Prevention from "../screens/prevention";
import Header from "../shared/header";
import React from "react";

const screens = {
  Prevention: {
    screen: Prevention,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Ways to prevent Covid-19" />
        ),
      };
    },
  },
};

const PreventionStack = createStackNavigator(screens);

export default PreventionStack;
