
import {View, Text, StyleSheet} from "react-native"
import React from "react"
export default function WorkSites() {

    const data = ['Lucknow', 'Mirjapur','Varanasi', 'Ranvum','Lucknow', 'Mirjapur','Varanasi', 'Ranvum','Lucknow', 'Mirjapur','Varanasi', 'Ranvum', ]
    const Com = data.map(x=> {
        <View><Text style={styler.text}>{x}x</Text></View>
    })
    return <View>{Com}</View>
}

const styler = StyleSheet.create({
    text: {
        color: "black"
    }
})