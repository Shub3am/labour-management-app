import React from "react";
import {View, SafeAreaView, Text, StatusBar, FlatList} from "react-native"
import styles from "./styles";
import {
    LineChart,
  
  } from "react-native-gifted-charts"; 

export default function Home ()  {
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