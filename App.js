import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './Screens/HomeScreeen';
import CovidScreen from './Screens/CovidScreen';
import NewsScreen from './Screens/NewsScreen';
import WeatherScreen from './Screens/WeatherSceen';
import JokeScreen from './Screens/JokeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  WeatherScreen : WeatherScreen,
  CovidScreen : CovidScreen,
  NewsScreen : NewsScreen,
  JokeScreen : JokeScreen
});

const AppContainer = createAppContainer(AppNavigator);
