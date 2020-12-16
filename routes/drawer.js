import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppCintainer, createAppContainer } from "react-navigation";

import PreventionStack from "./preventionStack";
import HomeStack from "./homeStack";
import InfoCovidStack from "./infocovidStack";
import HealthyLifeStack from "./healthylifeStack";
import WhatToDoStack from "./whattodoStack";
import AboutStack from "./aboutStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Prevention: {
    screen: PreventionStack,
  },
  InfoCovid: {
    screen: InfoCovidStack,
  },
  HealthyLife: {
    screen: HealthyLifeStack,
  },
  WhatToDo: {
    screen: WhatToDoStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
