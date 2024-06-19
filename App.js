import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './screens/bankCard';
import BankCard from './screens/bankCard';
import RatecardButton from './screens/ratecardButtton';

export default function App() {
  return (
    <View style={styles.container}>

      <BankCard/>
      <RatecardButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
