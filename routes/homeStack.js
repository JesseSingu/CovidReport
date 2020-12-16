import { createStackNavigator } from "react-navigation-stack";
import Welcome from "../screens/welcome";
import ReportScreen from "../screens/reportScreen";
import Header from "../shared/header";
import React from "react";

const screens = {
  Welcome: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Welcome" />,
      };
    },
  },
  reportScreen: {
    screen: ReportScreen,
    navigationOptions: {
      title: "Reporting Form",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 90 },
  },
});

export default HomeStack;
