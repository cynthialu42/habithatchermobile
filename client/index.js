import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import EggList from './src/components/EggList';

const App = () => (
    <View style={{ flex: 1 }}>
        <EggList />
    </View>
);

AppRegistry.registerComponent('client', () => App);