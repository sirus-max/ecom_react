import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import fetchRandomNumbers from "../API/randomNumber";
import GraphBar from "./widgets/graphBar";

const WeeklyDetails =  () => {
  
  let weekly_earnings_data = [
    ["12-18 Feb", 110],
    ["20-26 Feb", 90],
    ["28-5 Mar", 120],
    ["6-12 Mar", 80],
    ["Curr Week", 50],
  ];

  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [arr, setArr]  = useState(weekly_earnings_data)



  useEffect( () => {


    const delay = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      func();
    };
  


    async function func(){
    randomNumbers = await fetchRandomNumbers();
    const arrcopy =  [...weekly_earnings_data]
    for ( i = 0 ; i < 5 ; i++){
     arrcopy[i][1] = randomNumbers[i];
    }
    await delay();
    setLoading(false);
    setArr(arrcopy);

  }
  func();


  }, [])



  



  let barColor = "#D1E0FF";
  
  function handleLeftArrowPressed(){
    console.log("left arrow pressed");
    

    if(index > 0)
      setIndex(index - 1);
    console.log("index",index);
  }

  function handleRightArrowPressed(){
    console.log("right arrow pressed");
    if(index < 4)
      setIndex(index + 1);
    console.log("index",index);
  }
  return (
    <View style={styles.container}>
      <View style={styles.date_view}>
        <TouchableOpacity onPress={() => handleLeftArrowPressed()}>
        <MaterialIcons name="keyboard-arrow-left" size={36} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "500", width:100, textAlign:'center' }}>
          {loading ? "Loading" : arr[index][0]}
        </Text>
        <TouchableOpacity onPress={() => handleRightArrowPressed()}>
        <MaterialIcons name="keyboard-arrow-right" size={36} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.amount}>
          { loading ? "Loading" :  "₹" + arr[index][1].toString() }
      </Text>
      </View>

      <View style={styles.graph}>
        {loading && <Image source={require('../assets/scooter.png')}/>}
      {!loading && weekly_earnings_data.map((item, ind) => {
                const barColor = ind === index ? "#24247A" : "#D1E0FF"  ; // Conditional color
                return (
                    <GraphBar 
                        key={ind} 
                        label={item[0]} 
                        value={item[1]} 
                        barColor={barColor} 
                    />
                );
            })}
      </View>

      <View style={styles.earning_history}>
        <Text style={{ fontSize: 20 }}>Earnings History</Text>
        <MaterialIcons name="keyboard-arrow-right" size={36} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "85%",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "rgb(16,24,40)",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    borderRadius: 15,
  },
  graph: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
    paddingVertical: 10,
  },
  date_view: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 2,
    alignItems: "center",
    gap: 10,
  },
  amount: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },

  earning_history: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(239, 244, 254, 255)",
    width: "100%",
    borderBottomLeftRadius: 15, // Adjust the radius as per your design
    borderBottomRightRadius: 15,
  },
});

export default WeeklyDetails;
