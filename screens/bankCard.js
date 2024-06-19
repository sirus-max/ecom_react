import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

// import LinearGradient from 'react-native-linear-gradient';

const BankCard = () => {
  return (
    // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
    <LinearGradient colors={["#25408F", "#011349"]} style={styles.container}>
      <View className="p-3" style={styles.bank}>

        <Image source={require('../assets/bankIcon.png')}/>
        <Text style={styles.bankName}>HDFC Bank</Text>
        <View style={styles.paymentInfo}>
        <Text style={styles.paymentDelayed}>Payment Delayed</Text>
        </View>
      </View>
      <Text style={styles.customerName}>Alok Kumar</Text>
      <Text style={styles.utr}>UTR Reference No: 8392039329301</Text>
      <View style={styles.amountDetails}>
        <View>
            <Text style={styles.bankName}>₹1200</Text>
            <Text style={styles.bankName}>Amount Due</Text>
        </View>
        <View >
            <Text style={styles.bankName}>24th Feb</Text>
            <Text style={styles.bankName}>Disbursment Date</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({


  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "blue",
    width: 400,
    shadowColor:'black',
    borderRadius: 15,
  },
  bank:{
    flexDirection:'row',
    padding:5,
    alignItems:'center',
  },
   bankName: {
    color: "white",
    fontSize:14,
    fontWeight:'bold',
    marginHorizontal: 5, 
  },
  paymentInfo: {
    borderRadius: 10,
    marginHorizontal: 5, 
    overflow: 'hidden'
  },
  paymentDelayed:{
    color:'red',
    backgroundColor: 'yellow',
    padding: 5,
  },
  customerName:{
    color: "white",
    fontSize:20,
    fontWeight:'bold',
    padding:5,
  },
  utr : {
    paddingHorizontal:5,
    color:'white',

  },
  amountDetails : {
    paddingHorizontal:5,
    paddingTop:10,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
    justifyContent:'space-between',
    
  }
});

export default BankCard;
