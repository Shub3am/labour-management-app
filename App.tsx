import React from 'react';
import {
  LineChart,

} from "react-native-gifted-charts"; 

import styles from "./App_styles"
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  View,
  ScrollView,
  FlatList,
  
  SectionList
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
const Home = () => {
  StatusBar.setBackgroundColor("black")
  const datas=[ {value:50, label: "first"}, {value:80,label: "second"}, {value:90,label: "third"}, {value:70, label: "fourth"} ]
  const data = ['Mirjapur', "Lucknow", "Amethi",'Mirjapur', "Lucknow", "Amethi",'Mirjapur', "Lucknow", "Amethi",'Mirjapur', "Lucknow", "Amethi",'Mirjapur', "Lucknow", "Amethi"]
  const pending = [{pending: 302, site: "Mirjapur"}, {pending: 1, site: "Lucknow"}, {pending: 10034, site: "Amethi"},{pending: 302, site: "Mirjapur"}, {pending: 1, site: "Lucknow"}, {pending: 10034, site: "Amethi"}]
  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to S.S Furniture Steel Mart</Text>
    <View style={styles.recent}><Text style={styles.header}> Recent Work Sites</Text><FlatList data={data} renderItem={({item})=> <Text onPress={()=> {console.log(`Clicked ${item}`)}} style={styles.recentItems}>{item}</Text>} horizontal={true} showsHorizontalScrollIndicator={false}/></View>
    <View style={{backgroundColor: '#1A3461', maxHeight: "auto"}}><LineChart data={datas}  isAnimated={true}            initialSpacing={0}
             
              spacing={30}
              width={100}

            
              thickness={5}
              hideRules
            
              yAxisColor="#0BA5A4"
              showVerticalLines
              verticalLinesColor="rgba(14,164,164,0.5)"
              xAxisColor="#0BA5A4"
              color="#0BA5A4"/></View>
    
    
    <View><Text style={styles.header}>Pending Labour Cost</Text><FlatList data={pending} renderItem={({item})=> {
      return(<View style={styles.tableN}><Text style={styles.table}>{item.site}: </Text><Text style={styles.table}>{item.pending}</Text></View>)}}/></View>

    </SafeAreaView>
    
  );
};



const App = () => {
  return (
      <BottomMenu/>
  )
}

export default App;
