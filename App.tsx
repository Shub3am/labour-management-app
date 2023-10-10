import React from 'react';
import {
  LineChart,

} from "react-native-gifted-charts"; 

import styles from "./App_styles"
import { Dimensions } from "react-native";
import Home from './screens/Home/screen';
import {

  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WorkSites from './screens/Worksites/page';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();





function SettingsScreen() {
  return <Text>Testing</Text>
}

function BottomMenu() {
  return (
    <Tab.Navigator screenOptions={{headerStyle: {backgroundColor: "black"}, headerTitleStyle: {color: "white"},tabBarItemStyle: {backgroundColor:"black"}, tabBarBadgeStyle: {backgroundColor: "black"}, tabBarStyle: {backgroundColor: "black"}}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Work Sites" component={WorkSites}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}




const App = () => {
  return (
      <BottomMenu/>
  )
}

export default App;
