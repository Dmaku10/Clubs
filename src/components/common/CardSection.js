import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 4,
        backgroundColor: '#fefffd',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderColor:'#fefffd',
        borderWidth:5,
    }
};

export { CardSection };