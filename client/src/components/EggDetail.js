import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const EggDetail = ({ habit }) => {
    const { complete, _id, name, iteration, count, description, egg, date } = habit;
    const { 
        headerContentStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle, 
        titleStyle,
        imageStyle,
        addButtonStyle,
        addTextStyle,
        listStyle,
        itemStyle,
        birdDescription
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    {egg.is_hatched ?
                        <Image style={itemStyle} source={{uri: egg.end_img}} />
                        :
                        <Image style={itemStyle} source={{uri: egg.start_img}} />
                    }

                </View>
                <View style={headerContentStyle}>
                    {egg.is_hatched ?
                        (<View style={headerContentStyle}><Text style={titleStyle}>{egg.name}</Text>
                            <Text style={birdDescription}>"{egg.bird_description}"</Text>
                            <Text style={{fontSize: 12}}>Hatched from "{name}" habit</Text></View>)
                        :
                        (<View style={headerContentStyle}><Text style={titleStyle}>???</Text>
                            <Text style={birdDescription}>Egg has not hatched yet!</Text>
                            <Text style={{fontSize: 12}}>Hatching from "{name}" habit</Text></View>)
                    }
                    
                </View>
            </CardSection>
        </Card>
        
    )
};

const styles = {
    listStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemStyle: {
        margin: 3,
        width: 150,
        height: 150
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1
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
    },
    addButtonStyle:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingRight: 10
    },
    addTextStyle:{
        fontSize: 30,
        color: '#37a69a'
    },
    birdDescription: {
        fontStyle: 'italic'
    }
}

export default EggDetail;