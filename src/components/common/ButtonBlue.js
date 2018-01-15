import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonBlue = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fefffd',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 7,
        paddingBottom: 7
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#3b5998',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#3b5998',
        marginLeft: 5,
        marginRight: 5,
        justifyContent:'center',

    }
};

export { ButtonBlue };
