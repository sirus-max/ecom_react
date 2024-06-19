import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const AppBar = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  backgroundColor,
}) => {
  return (
    <LinearGradient colors={["#25408F", "#011349"]} style={styles.container}>
      <View style={[styles.appBar]}>
        <Text style={styles.title}>My Earnings</Text>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container:{
    height: "20%",
  },

  appBar: {
   
    width: "100vw",
    paddingTop:'20%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    elevation: 4, // Adds shadow for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
  },
  iconButton: {
    padding: 8,
  },
  title: {
    color: "white",
    fontSize: 20,
    // paddingTop:35,
    fontWeight: "600",
  },
});
export default AppBar;