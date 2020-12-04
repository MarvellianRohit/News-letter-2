import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class CovidScreen extends React.Component {
  render(){
    return(
      <View>
       <Text style={{backgroundColor : 'blue', fontSize : 28, fontWeight : 'bold',textAlign : 'center', marginTop : 50}}>Cases And Deads In Saudi Arabia</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 70, fontWeight : 'bold'}}>Total Cases : 348, 510</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 68, fontWeight : 'bold'}}>Total Deadths : 5, 456</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 75, fontWeight : 'bold'}}>Recovered : 335,153</Text>
       <Text style={{backgroundColor : 'green', fontSize : 28, fontWeight : 'bold', marginTop : 50, textAlign : 'center'}}>Cases And Deads In India</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 70, fontWeight : 'bold'}}>Total Cases : 8,313,876</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 68, fontWeight : 'bold'}}>Total Deadths : 123,650</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 75, fontWeight : 'bold'}}>Recovered : 7,656,478</Text>
       <Text style={{backgroundColor : 'orange', fontSize : 28, fontWeight : 'bold', marginTop : 50, textAlign : 'center'}}>Cases And Deads In United States</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 70, fontWeight : 'bold'}}>Total Cases : 9,692,528</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 68, fontWeight : 'bold'}}>Total Deadths : 238,641</Text>
       <Text style={{fontSize : 18, marginTop : 30, marginLeft : 75, fontWeight : 'bold'}}>Recovered : 6,236,170</Text>
      </View>
    )
  }
}