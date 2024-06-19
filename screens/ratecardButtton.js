import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RatecardButton() {

    const handlePress = () => {
        console.log('Rate Card pressed!');
    };    

  return (
    <Pressable style={styles.container} onPress={handlePress}>
        <Text style={styles.ratecard}>Rate Card</Text>
        <Icon style={styles.arrow} name="chevron-right" size={20}/>
    </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    width: 400,
    borderRadius: 15,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgb(16,24,40)', 
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 7,
  },
  arrow: {
    color: '#344054',
    size: 20,
  },
  ratecard: {
    fontSize: 18,
    color: '#344054',
    fontWeight: 600,
    lineHeight: 28,
  }
});
