import React from 'react';
import { TabNavigator, TabBarBottom, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HabitList from './../src/components/HabitList';
import EggList from './../src/components/EggList';
import Add from './../src/components/Add';

export const Tabs = createBottomTabNavigator({
    HabitList: {
        screen: HabitList,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={35} color={tintColor} />
        },
    }, 
    Add: {
        screen: Add,
        navigationOptions: {
            tabBarLabel: 'Add',
            tabBarIcon: ({ tintColor }) => <Icon name='add-box' size={35} color={tintColor} />
        },
    },
    EggList: {
        screen: EggList,
        navigationOptions: {
            tabBarLabel: 'Aviary',
            tabBarIcon: ({ tintColor }) => <Icon name='favorite' size={35} color={tintColor} />
        },
    }
},{
    tabBarOptions: {
        activeTintColor: '#3dcab7',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
        },
      }
});

