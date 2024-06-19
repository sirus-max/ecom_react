// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import './screens/bankCard';
// import BankCard from './screens/bankCard';
// import RatecardButton from './screens/ratecardButtton';
// import weeklyDetails from './screens/weeklyDetails';
import WeeklyDetails from './screens/weeklyDetails';
import AppBar from './screens/appBar';

// export default function App() {
//   return (
//    <>

//        <AppBar/>
//     <View style={styles.container}>
//       <WeeklyDetails/>
//       <BankCard/>
//       <RatecardButton/>
//     </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position:'absolute',
//     top:'15%',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




///



import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./screens/bankCard";
import BankCard from "./screens/bankCard";
import RatecardButton from "./screens/ratecardButtton";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return (
    <>

        <AppBar/>
     <View style={styles.container}>
       <WeeklyDetails/>
       <BankCard/>
       <RatecardButton/>
     </View>
   </>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={styles.navbar}
        activeColor="#24247A"
        inactiveColor="#98A2B3"
        activeIndicatorStyle={styles.indicator}
        >
        <Tab.Screen
          name="My Earnings"
          component={HomeScreen}
          options={{
            tabBarLabel: "Earnings",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="currency-rupee" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Campaign"
          component={HomeScreen}
          options={{
            tabBarLabel: "Campaign",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="money" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Streak"
          component={HomeScreen}
          options={{
            tabBarLabel: "Streaks",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="auto-graph" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Refer"
          component={HomeScreen}
          options={{
            tabBarLabel: "Refer",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-add" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
        position:'absolute',
        top:'15%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  navbar: {
    backgroundColor: "#FFFFFF",
    borderTopColor: '#EAECF0',
    borderTopWidth: 3,
  },
  indicator: {
    backgroundColor: 'white'
  }
});

