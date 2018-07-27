import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import EggList from './src/components/EggList';
import HabitList from './src/components/HabitList';

const App = () => (
    <View style={{ flex: 1 }}>
        <EggList />
        <HabitList />
    </View>
);

AppRegistry.registerComponent('client', () => App);