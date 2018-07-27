import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HabitList from './../src/components/HabitList';
import EggList from './../src/components/EggList';

export const Tabs = TabNavigator({
    HabitList: {
        screen: HabitList
    }, 
    EggList: {
        screen: EggList
    }
});