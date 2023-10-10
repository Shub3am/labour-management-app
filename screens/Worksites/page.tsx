
import {View, Text, StyleSheet, FlatList} from "react-native"
import React from "react"
export default function WorkSites() {

    const data = ['Lucknow', 'Mirjapur','Varanasi', 'Ranvum','Lucknow', 'Mirjapur','Varanasi', 'Ranvum','Lucknow', 'Mirjapur','Varanasi', 'Ranvum', ]

    return <FlatList style={styler.container} data={data} renderItem={({item})=> <Text>{item}</Text>} />
}

const styler = StyleSheet.create({
    container: {display: "grid", flexDirection: "row", flexWrap: "wrap"},
    dataContainer: {
        borderWidth: 2,
        padding: 5,
        borderColor: "black",
    },
    text: {
        color: "black"
    }
})