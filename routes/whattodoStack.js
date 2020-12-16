import { createStackNavigator } from "react-navigation-stack";
import WhatToDo from "../screens/whattodo";
import Header from "../shared/header";
import React from "react";

const screens = {
  WhatToDo: {
    screen: WhatToDo,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header
            navigation={navigation}
            title="What to do with an infected person"
          />
        ),
      };
    },
  },
};

const WhatToDoStack = createStackNavigator(screens);

export default WhatToDoStack;
