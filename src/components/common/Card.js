import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ffffff',
        borderBottomWidth: 0,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 0,
        marginRight: 0,
        marginTop:0,
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor:  '#fefffd'
    }
};

export { Card };