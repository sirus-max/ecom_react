import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GraphBar = (props) => {
  return (
    <View style={styles.container}>
        <View style={[styles.bar, {height:props.value, backgroundColor:props.barColor}]}></View>
      <Text style={styles.label}>{(props.label).replace(/ /g, '\n')}</Text>
    </View>
  )
}



const styles =  StyleSheet.create({
    container : {
        flexDirection:'column',
        alignItems:'center',

    },
    bar:{
        width:20,

        borderRadius:5,
    },
    label:{
        textAlign:'center'
    }
})
export default GraphBar