import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import EggList from './src/components/EggList';
import HabitList from './src/components/HabitList';
import { Tabs } from './config/router';
const App = () => (
  <View style={{flex: 1}}>
    {console.disableYellowBox = true}
    <Tabs />
  </View>
    
);

AppRegistry.registerComponent('client', () => App);