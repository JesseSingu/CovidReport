import { createStackNavigator } from "react-navigation-stack";
import HealthyLife from "../screens/healthylife";
import Header from "../shared/header";
import React from "react";

const screens = {
  HealthyLife: {
    screen: HealthyLife,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            title="How to maintain a healthy lifestyle"
          />
        ),
      };
    },
  },
};

const HealthyLifeStack = createStackNavigator(screens);

export default HealthyLifeStack;
