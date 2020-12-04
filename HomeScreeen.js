import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green'}]}
          onPress={() => {
            this.props.navigation.navigate('WeatherScreen');
          }}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'purple'}]}
          onPress={() => {
            this.props.navigation.navigate('JokeScreen');
          }}>
          <Text style={styles.buttonText}>Read A Joke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red'}]}
          onPress={() => {
            this.props.navigation.navigate('NewsScreen');
          }}>
          <Text style={styles.buttonText}>Top News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue'}]}
          onPress={() => {
            this.props.navigation.navigate('CovidScreen');
          }}>
          <Text style={styles.buttonText}>Covid Status</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            alert('Thanks For Your Feedback 😃')
          }}>
        <Image
              style={styles.dislikeImage}
              source={require('../dislike.png')}
         />
         </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            alert('Thanks For Your Feedback 😃')
          }}>
         <Image
              style={styles.likeImage}
              source={require('../like.png')}
         />
         </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 12,
    marginTop: 30,
    width: 200,
    height: 50,
    borderColor : 'black'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight : 'bold'
  },
  likeImage :{ 
      width: 80, 
      height: 80,  
      marginTop : -80,
      marginLeft : 70
    },
  dislikeImage :{ 
      width: 80, 
      height: 80, 
      marginTop: 30,
      marginLeft : 190
    },
});