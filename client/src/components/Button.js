import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
    const { buttonStyle, textStyle } = styles;

    return(
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5, 
        borderWidth: 1,
        borderColor: '#f50057',
        marginLeft: 5, 
        marginRight: 5,
        height: 40,
        marginTop: 10
    },
    textStyle: {
        alignSelf: 'center',
        color: '#f50057',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center'
    }
};
export default Button;