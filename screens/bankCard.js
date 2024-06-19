import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';
const BankCard = () => {
  return (
    // <LinearGradient colors={['#4C669F', '#3B5998', '#192F6A']}>
    <>
    <LinearGradient colors={["#25408F", "#011349"]} style={styles.container}>
      <View className="p-3" style={styles.bank}>
        {/* <Image source={require("../assets/bankIcon.png")} /> */}
        <MaterialCommunityIcons name="bank" size={24} color="white" />
        <Text style={styles.bankName}>HDFC Bank</Text>
        <Text style={styles.paymentDelayed}>Payment Delayed</Text>
      </View>
      <Text style={styles.customerName}>Alok Kumar</Text>
      <Text style={styles.utr}>UTR Reference No: 8392039329301</Text>
      <View style={styles.amountDetails}>
        <View>
          <Text style={styles.details}>₹1200</Text>
          <Text style={styles.bankName}>Amount Due</Text>
        </View>
        <View>
          <Text style={styles.details}>24th Feb</Text>
          <Text style={styles.bankName}>Disbursment Date</Text>
        </View>
      </View>
    </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 16,

    width:"85%",

    borderRadius: 15,
    shadowColor: 'rgb(16,24,40)', 
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 7,
    overflow:'hidden',
  },
  bank: {
    flexDirection: "row",
    padding: 8,
    gap: 12,
    alignItems: "center",
  },
  bankName: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  paymentDelayed: {
    color: "#B54708",
    fontSize: 12,
    backgroundColor: "#FFFAEB",
    fontWeight: "300",
    padding: 5,
    borderRadius: 10,
    overflow:'hidden',
  },
  customerName: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    padding: 5,
  },
  utr: {
    paddingHorizontal: 5,
    color: "white",
    fontWeight: "300",
    fontSize: 14,
  },
  amountDetails: {
    paddingHorizontal: 5,
    paddingRight: 56,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  details: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default BankCard;