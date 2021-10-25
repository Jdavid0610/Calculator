import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Calculator from "../screens/Calculator";
import Members from "../screens/Members";
import { RootTabParamList } from "../types";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Members"
        component={Members}
        options={{
          title: "Members",
          tabBarIcon: () => (
            <Icon name="accessibility" type="material" color="#517fa4" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          title: "Calculator",
          tabBarIcon: () => (
            <Icon name="calculate" type="material" color="#517fa4" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
