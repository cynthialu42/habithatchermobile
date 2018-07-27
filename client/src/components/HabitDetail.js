import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const HabitDetail = ({ habit }) => {
    const { complete, _id, name, iteration, count, description, egg, date } = habit;
    const { 
        headerContentStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle, 
        titleStyle,
        imageStyle
    } = style;
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    {count < egg.hatching_number ?
                        <Image style={thumbnailStyle} source={{ uri: egg.start_img }} />
                        :
                        <Image style={thumbnailStyle} source={{ uri: egg.hatch_img }} />
                    }
                </View>
                <View style={headerContentStyle}>
                    <Text style={titleStyle}>{name}</Text>
                    <Text>{count}/{iteration}</Text>
                </View>
            </CardSection>
        </Card>
    )
};
const style = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    titleStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
export default HabitDetail;