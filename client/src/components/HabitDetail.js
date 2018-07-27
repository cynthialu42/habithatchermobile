import React from 'react';
import { View, Text } from 'react-native';

const HabitDetail = ({ habit }) => {
    return(
        <View>
            <Text>{habit.name}</Text>
        </View>
    )
};

export default HabitDetail;