import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>

            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        lineHeight: 4,
        flex: 2,
        paddingBottom:5

    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };