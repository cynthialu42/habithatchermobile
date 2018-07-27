import React from 'react';
import { Text, View, Image } from 'react-native';

const EggDetail = ({ egg }) => {
    return (
        <View>
            <Text>{egg.name}</Text>
            <Text>{egg.bird_description}</Text>
        </View>
        
    )
};

export default EggDetail;